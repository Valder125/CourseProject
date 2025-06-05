// components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { favorites } = useFavorites();
  const { cartItems } = useCart();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">DiskStore</Link>
      </div>

      <div className="header-right">
        <nav className="header-nav">
          <a href="#what-are-disks">Що таке диски</a>
          <a href="#advantages">Переваги</a>
          <a href="#types">Види</a>
          <a href="#contacts">Контакти</a>
          <Link to="/shop">Купити</Link>
        </nav>

        <Link to="/favorites" className="icon-link">
          <Heart className="w-6 h-6 text-white" />
          {favorites.length > 0 && (
            <span className="icon-count">{favorites.length}</span>
          )}
        </Link>

        <Link to="/cart" className="icon-link">
          <ShoppingCart className="w-6 h-6 text-white" />
          {cartItems.length > 0 && (
            <span className="icon-count">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
