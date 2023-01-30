import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const itemsResponse = await axios.get(
        "https://63d3c6d4c1ba499e54c87ed2.mockapi.io/items"
      );

      const cartItemsResponse = await axios.get(
        "https://63d3c6d4c1ba499e54c87ed2.mockapi.io/cart"
      );

      setIsLoading(false);
      setCartItems(cartItemsResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => String(item.id) === String(obj.id))) {
      axios.delete(
        `https://63d3c6d4c1ba499e54c87ed2.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => String(item.id) !== String(obj.id))
      );
    } else {
      axios.post("https://63d3c6d4c1ba499e54c87ed2.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };
  const onRemoveItemInCart = (id) => {
    axios.delete(`https://63d3c6d4c1ba499e54c87ed2.mockapi.io/cart/${id}`);
    setCartItems((prev) =>
      prev.filter((item) => String(item.id) !== String(id))
    );
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find((item) => String(item.id) === String(obj.id))) {
      setFavorites((prev) =>
        prev.filter((item) => String(item.id) !== String(obj.id))
      );
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
  };
  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          onClose={() => {
            setCartOpened(false);
          }}
          items={cartItems}
          onRemoveItem={onRemoveItemInCart}
        />
      ) : null}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
