import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Favorites = ({ onAddToFavorite, onAddToCart }) => {
  const { favorites } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="main-search-container">
        <h1>Мои закладки</h1>
      </div>
      <div className="cards-container">
        {favorites.map((item, index) => (
          <Card
            key={index}
            onClickFavoriteBtn={(obj) => onAddToFavorite(obj)}
            onClickAddBtn={(obj) => onAddToCart(obj)}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
