import styles from "./Drawer.module.scss";
const Drawer = ({ onClose, onRemoveItem, items = [] }) => {
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
                    style={{ backgroundImage: `url(${obj.img})` }}
                    className={styles.cartItem__sneakersImg}
                  ></div>
                  <div className={styles.cartItem__infoBox}>
                    <p>{obj.title}</p>
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
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className={styles.greenButton}>
                Сделать заказ <img src="/img/arrow.svg" alt="arrow" />{" "}
              </button>
            </div>
          </>
        ) : (
          <div className={styles.cartEmpty}>
            <img
              src="/img/cartEmpty.png"
              width={120}
              height={120}
              alt="cart empty"
            />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={onClose} className={styles.greenButton}>
              <img src="/img/arrowReverse.svg" alt="arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
