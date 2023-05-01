import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.headerLeft}>
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className={styles.headerInfo}>
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className={styles.headerRight}>
        <li onClick={props.onClickCart} className={styles.headerRight__cart}>
          <img src="/img/cart.svg" alt="cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <Link to="/favorites">
          <li className={styles.headerRight__heart}>
            <img src="/img/heart.svg" alt="heart icon" />
          </li>
        </Link>
        <li className="headerRight__user">
          <img src="/img/user.svg" alt="user-svg" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
