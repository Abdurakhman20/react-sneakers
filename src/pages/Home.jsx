import Card from "../components/Card";

const Home = ({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        added={cartItems.some((obj) => String(obj.id) === String(item.id))}
        onClickFavoriteBtn={(obj) => onAddToFavorite(obj)}
        onClickAddBtn={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content">
      <div className="main-search-container">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search-icon.svg" alt="search icon" />
          {searchValue ? (
            <img
              onClick={() => {
                setSearchValue("");
              }}
              src="/img/btn-remove.svg"
              className="clearBtn"
              alt="remove btn"
            />
          ) : null}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="cards-container">{renderItems()}</div>
    </div>
  );
};

export default Home;
