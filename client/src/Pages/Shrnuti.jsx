import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Shrnuti.css"; 

export default function Shrnuti() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    jmeno: "",
    adresa: "",
    email: "",
    platba: "kartou", 
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Header />
      <div className="summary-container">
        <h2>Objednávka - Shrnutí</h2>

        <div className="order-summary">
          <h3>Shrnutí objednávky:</h3>
          {cart.length === 0 ? (
            <p>Košík je prázdný.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="order-item">
                  <p>{item.name} - {item.price} Kč</p>
                </div>
              ))}
              <p><strong>Celková cena:</strong> {totalPrice} Kč</p>
            </>
          )}
        </div>

        <div className="payment-summary">
          <h3>Platba:</h3>
          <p>Platba kartou byla úspěšně provedena.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
