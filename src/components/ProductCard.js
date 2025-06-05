// src/components/ProductCard.jsx
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react"; 
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import "./Shop.css";

const ProductCard = ({ product, inCart = false, onRemove }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <Card className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-card__image"
      />
      <div className="product-card__name">{product.name}</div>

      <div className="product-card__actions">
        <Button
          variant={isFavorite ? "default" : "outline"}
          onClick={toggleFavorite}
          className="product-card__button"
          aria-label={isFavorite ? "Видалити з обраного" : "Додати в обране"}
        >
          <Heart
            className="w-6 h-6"
            fill={isFavorite ? "black" : "none"}
            stroke="black"
          />
        </Button>

        {inCart ? (
          <Button
            variant="destructive"
            className="product-card__button"
            onClick={onRemove}
            aria-label="Видалити з кошика"
          >
            <Trash2 className="w-6 h-6" />
          </Button>
        ) : (
          <Button
            className="product-card__button"
            onClick={() => addToCart(product)}
            aria-label="Додати до кошика"
          >
            <ShoppingCart className="w-6 h-6" />
          </Button>
        )}

        <div className="product-card__price">{product.price} грн</div>
      </div>
    </Card>
  );
};

export default ProductCard;
