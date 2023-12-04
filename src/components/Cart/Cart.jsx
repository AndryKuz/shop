import { useDispatch, useSelector } from "react-redux";

import cl from "../../styles/Cart.module.scss";

import { sumBy } from "../utils/common";
import { addItemToCart, removeItemToCart } from "../App/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({...item, quantity}))
  };

  const removeItem = (id) => {
    dispatch(removeItemToCart(id))
  }

  return (
    <section className={cl.cart}>
      <h2 className={cl.title}>Your cart</h2>

      {!cart.length ? (
        <div className={cl.empty}>Here is empty</div>
      ) : (
        <>
          <div className={cl.list}>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={cl.item} key={id}>
                  <div
                    className={cl.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={cl.info}>
                    <h3 className={cl.name}>{title}</h3>
                    <div className={cl.category}>{category.name}</div>
                  </div>

                  <div className={cl.price}>{price}$</div>

                  <div className={cl.quantity}>
                    <div className={cl.minus} onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
                      <svg viewBox="0 0 310.285 310.285">
                        <path d="M155.143,0.001C69.597,0.001,0,69.597,0,155.143c0,85.545,69.597,155.142,155.143,155.142s155.143-69.597,155.143-155.142  C310.285,69.597,240.689,0.001,155.143,0.001z M244.143,171.498c0,4.411-3.589,8-8,8h-163c-4.411,0-8-3.589-8-8v-32  c0-4.411,3.589-8,8-8h163c4.411,0,8,3.589,8,8V171.498z" />
                      </svg>
                    </div>

                    <span>{quantity}</span>

                    <div className={cl.plus} onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}>
                      <svg viewBox="0 0 490 490">
                        <g clip-path="url(#clip0_103_314)">
                          <path d="M227.8,174.1v53.7h-53.7c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h53.7v53.7c0,9.5,7.7,17.2,17.2,17.2     s17.1-7.7,17.1-17.2v-53.7h53.7c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2     S227.8,164.6,227.8,174.1z" />
                          <path d="M71.7,71.7C25.5,118,0,179.5,0,245s25.5,127,71.8,173.3C118,464.5,179.6,490,245,490s127-25.5,173.3-71.8     C464.5,372,490,310.4,490,245s-25.5-127-71.8-173.3C372,25.5,310.5,0,245,0C179.6,0,118,25.5,71.7,71.7z M455.7,245     c0,56.3-21.9,109.2-61.7,149s-92.7,61.7-149,61.7S135.8,433.8,96,394s-61.7-92.7-61.7-149S56.2,135.8,96,96s92.7-61.7,149-61.7     S354.2,56.2,394,96S455.7,188.7,455.7,245z" />
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className={cl.total}>{price * quantity}$</div>

                  <div className={cl.close} onClick={removeItem(item.id)}>
                    <svg viewBox="0 0 512 512">
                      <g id="cross_copy">
                        <path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" />
                      </g>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={cl.actions}>
            <div className={cl.total}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>

            <button className={cl.proceed}>Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;

// 1 - Когда добавляем в корзину (кнопка add to cart) то item поопадает в store user => cart(где вся инфа обьекта, quantity: количество)
//      значит вытаскиваем хуком useSelector обьект cart из user

// 2 - пишем структуру return
//      сделать проверку после h2, что !cart.length
// 3- создаем новый ROUTE в ROUTES.jsx
// 4 - в хедере прописать Link to={ROUTES.CART} что бы при нажатии на корзину у нас был роут линк на компонент cart
