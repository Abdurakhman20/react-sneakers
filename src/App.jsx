function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="headerRight__cart">
            <img src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li className="headerRight__user">
            <img src="/img/user.svg" alt="user-svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers-container">
          {/* card 1 */}
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__bottom">
              <div className="card__bottom__cost">
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.png"
                  alt="plus icon"
                />
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="card__bottom">
              <div className="card__bottom__cost">
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.png"
                  alt="plus icon"
                />
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__bottom">
              <div className="card__bottom__cost">
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.png"
                  alt="plus icon"
                />
              </button>
            </div>
          </div>
          {/* card 4 */}
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            ></img>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="card__bottom">
              <div className="card__bottom__cost">
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.png"
                  alt="plus icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
