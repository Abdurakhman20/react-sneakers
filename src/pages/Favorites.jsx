import Card from "../components/Card";

const Favorites = ({ items, onAddToFavorite, onAddToCart }) => {
  return (
    <div className="content">
      <div className="main-search-container">
        <h1>Мои закладки</h1>
      </div>
      <div className="cards-container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            id={item.id}
            price={item.price}
            img={item.img}
            onClickFavoriteBtn={(obj) => onAddToFavorite(obj)}
            onClickAddBtn={(obj) => onAddToCart(obj)}
            favorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
