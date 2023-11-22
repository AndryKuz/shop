import { Link } from "react-router-dom";
import cl from "../../styles/Products.module.scss";

const Products = ({ title, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount)
  return (
    <section className={cl.products}>
      {title && <h2>{title}</h2>}
      <div className={cl.list}>
        {list.map(
          ({ id, image, title, category: { name: categories }, price }) => (
            <Link to={`/products/${id}`} key={id} className={cl.product}>
              <div className={cl.image}>
                <img src={image} alt="products" />
              </div>
              <div className={cl.wrapper}>
                <h3 className={cl.title}>{title}</h3>
                <div className={cl.categories}>{categories}</div>
                <div className={cl.info}>
                  <div className={cl.prices}>
                    <div className={cl.price}>{price}$</div>
                    <div className={cl.oldPrice}>
                      {Math.floor(price * 0.8)}$
                    </div>
                  </div>
                  <div className={cl.purchases}>
                    {Math.floor(Math.random() * 20 + 1)}purchases
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default Products;
