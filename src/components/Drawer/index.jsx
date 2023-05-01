import React from "react";
import styles from "./Drawer.module.scss";
import DrawerInfoBlock from "../DrawerInfoBlock";
import AppContext from "../../context";
import axios from "axios";

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const Drawer = ({ onClose, onRemoveItem, items = [] }) => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  const onClickOrder = async () => {
    setIsOrderComplete(true);
    setCartItems([]);
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await axios.delete(
        `https://63d3c6d4c1ba499e54c87ed2.mockapi.io/cart/${item.parentId}`
      );
      await delay(10000);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            className="remove-btn"
            src="/img/btn-remove.svg"
            alt="btn remove"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className={styles.cartItems}>
              {items.map((obj, index) => (
                <div key={index} className={styles.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${obj.imgUrl})` }}
                    className={styles.cartItem__sneakersImg}
                  ></div>
                  <div className={styles.cartItem__infoBox}>
                    <p>{obj.name}</p>
                    <b>{obj.price} руб</b>
                  </div>
                  <img
                    className="remove-btn"
                    src="/img/btn-remove.svg"
                    alt="btn remove"
                    onClick={() => onRemoveItem(obj.id)}
                  />
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>{totalPrice - totalPrice * 0.05} руб.</b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>{totalPrice * 0.05} руб.</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className={styles.greenButton}>
                Сделать заказ <img src="/img/arrow.svg" alt="arrow" />{" "}
              </button>
            </div>
          </>
        ) : (
          <DrawerInfoBlock
            img={
              isOrderComplete ? "/img/orderComplete.jpg" : "/img/cartEmpty.png"
            }
            title={isOrderComplete ? "Заказ Оформлен" : "Корзина пустая"}
            description={
              isOrderComplete
                ? "Ваш заказ скоро будет передан курьерской доставке"
                : "Добавьте хотя-бы одну пару кроссовок, чтобы оформить заказ"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
