import React, { useState } from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

const Card = ({
  id,
  name,
  price,
  imgUrl,
  onClickFavoriteBtn,
  onClickAddBtn,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickAdd = () => {
    onClickAddBtn({ id, name, price, imgUrl });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onClickFavoriteBtn({ id, name, price, imgUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={210}
          viewBox="0 0 210 210"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="15" ry="15" width="150" height="100" />
          <rect x="0" y="120" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="150" rx="5" ry="5" width="100" height="15" />
          <rect x="120" y="173" rx="10" ry="10" width="32" height="32" />
          <rect x="2" y="180" rx="5" ry="5" width="80" height="25" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favoriteIconBox}>
            <img
              src={
                isFavorite ? "/img/filled-heart.png" : "/img/unfilled-heart.svg"
              }
              alt="unfilled heart"
              onClick={onClickFavorite}
            />
          </div>
          <img width={133} height={112} src={imgUrl} alt="Sneakers"></img>
          <h5>{name}</h5>
          <div className={styles.card__bottom}>
            <div className={styles.card__bottom__cost}>
              <span>Цена:</span>
              <b>{price} руб</b>
            </div>
            <img
              className={styles.btnPlus}
              onClick={onClickAdd}
              src={isAdded ? "/img/checked.svg" : "/img/unchecked.svg"}
              alt="plus icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
