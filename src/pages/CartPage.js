//src/pages/CartPage.js
import React from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Кошик</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted-foreground">Кошик порожній.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id}>
                <ProductCard
                  product={item}
                  inCart={true}
                  onRemove={() => removeFromCart(item.id)}
                />
              </li>
            ))}
          </ul>

          <div className="flex justify-end mt-6">
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 shadow-md w-full max-w-sm text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Загальна сума</h3>
              <p className="text-2xl font-extrabold text-green-600">{totalPrice} грн</p>
            </div>
          </div>

        </>
      )}
    </div>
  );
};

export default CartPage;
