import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { useEffect } from "react";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../features/products/productsSlice";

const SingleProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ products }) => products); // хук useSelector вытаскивает из store.js -  products: productsSlice, где в productsSlice есть related
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      // если загрузка не пройдет, то мы вернем роут на HOME то есть на домащнюю страницу
      navigate(ROUTES.HOME); // к примеру в url http://localhost:3000/products/5545445 задать несуществующий id(5545445) в таком случаее запрос на сервер не пройдет и мы вернемся на домашнюю страницу
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return; // далем для того что бы успела подгрузиться data и list( иначе у нас Related Products не будет успевать рендериться)

    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch, list.length]);

  return !data ? (
    <section className="placeholder">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={10} title="Related Products" />
    </>
  );
};

export default SingleProducts;
