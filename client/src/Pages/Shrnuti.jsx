import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Objednavka.css";

export default function Shrnuti() {
  const navigate = useNavigate();
  const orderInfo = JSON.parse(localStorage.getItem("orderInfo"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleConfirm = () => {
   
    localStorage.removeItem("cart");
    localStorage.removeItem("orderInfo");
    navigate("/dekujeme");
  };

  return (
    <div>
      <Header />
      <div className="order-summary-container">
        <h2>Shrnutí objednávky</h2>
        <p><strong>Jméno:</strong> {orderInfo.jmeno}</p>
        <p><strong>Email:</strong> {orderInfo.email}</p>
        <p><strong>Adresa:</strong> {orderInfo.adresa}</p>
        <p><strong>Platba:</strong> {orderInfo.platba}</p>

        <h3>Produkty:</h3>
        {cart.map((item, index) => (
          <p key={index}>• {item.name} – {item.price} Kč</p>
        ))}

        <h3>Celková cena: {total} Kč</h3>
        <button onClick={handleConfirm}>Potvrdit objednávku</button>
      </div>
      <Footer />
    </div>
  );
}
