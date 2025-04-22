import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Kosik.css";
import { useNavigate } from "react-router-dom";

export default function Kosik() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    navigate("/objednavka-form");
  };

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h2>Košík</h2>
        {cart.length === 0 ? (
          <p>Košík je prázdný.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price} Kč</p>
                </div>
              </div>
            ))}
            <h3>Celková cena: {totalPrice} Kč</h3>
            <button className="checkout-button" onClick={handleOrder}>
              Objednat
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
