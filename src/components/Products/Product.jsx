import { Link } from "react-router-dom";

import cl from "../../styles/Product.module.scss";

import { ROUTES } from "../../utils/routes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../App/user/userSlice";

const SIZES = [44, 45, 47];

const Product = (item) => {
  const { title, images, price, description } = item;
  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };
  return (
    <section className={cl.product}>
      <div className={cl.images}>
        <div
          className={cl.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>
        <div className={cl["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={cl.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            ></div>
          ))}
        </div>
      </div>
      <div className={cl.info}>
        <h1 className={cl.title}>{title}</h1>
        <div className={cl.price}>{price} $</div>
        <div className={cl.color}>
          <span>Color:</span> Green
        </div>
        <div className={cl.sizes}>
          <span>Sizes:</span>
          <div className={cl.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                key={size}
                className={`${cl.size} ${
                  currentSize === size ? cl.active : ""
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={cl.description}>{description}</p>
        <div className={cl.action}>
          <button onClick={addToCart} className={cl.add} disabled={!currentSize}>
            add to cart
          </button>
          {/* disabled={!currentSize} отключаем кнопку если не выбран размер */}
          <button className={cl.favourite}>add to favourite</button>
        </div>
        <div className={cl.bottom}>
          <div className={cl.purchase}> 7 people purchased</div>
          <Link to={ROUTES.HOME}>Return to home page</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
