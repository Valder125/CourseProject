// src/pages/FavoritesPage.jsx
import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import ProductList from "../components/ProductList";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Обрані товари</h2>
      <ProductList products={favorites} />
    </div>
  );
};

export default FavoritesPage;