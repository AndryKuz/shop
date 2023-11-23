import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { filteredLessPrice } from "../../features/products/productsSlice";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Baner from "../Baner/Baner";
import Categories from "../Categories/Categories";


const Home = () => {
  const {
    products: {list, filtered},
    categories,
  } = useSelector((state) => state)
  const dispatch = useDispatch();
  
  

  useEffect(()=> {
    if(!list.length) return;

    dispatch(filteredLessPrice(100))
  }, [dispatch, list.length]);
  

  return (
    <>
      <Poster/>
      <Products products={list} amount={5} title='Shop'/>
      <Categories cat={categories.list} amount={5} title='Category'/>
      <Baner/>
      <Products products={filtered} amount={5} title='Less 100$'/>  
    </>
  );
};

export default Home;