import React from "react";
import styles from "./DrawerInfoBlock.module.scss";
import AppContext from "../../context";

const DrawerInfoBlock = ({ img, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className={styles.cartEmpty}>
      <img src={img} width={120} alt="cart empty" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        onClick={() => setCartOpened(false)}
        className={styles.greenButton}
      >
        <img src="/img/arrowReverse.svg" alt="arrow" /> Вернуться назад
      </button>
    </div>
  );
};

export default DrawerInfoBlock;
