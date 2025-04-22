import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Objednavka.css";
import { useNavigate } from "react-router-dom";

export default function Objednavka() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    jmeno: "",
    adresa: "",
    email: "",
    platba: "kartou",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Odesláno:", { objednavka: cart, udaje: formData });
    alert("Objednávka odeslána!");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="order-container">
        <h2>Objednávka</h2>

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

        <div className="order-form">
          <h3>Vyplňte údaje:</h3>
          <form onSubmit={handleSubmit}>
            <label>Jméno:</label>
            <input
              type="text"
              name="jmeno"
              value={formData.jmeno}
              onChange={handleChange}
              required
            />

            <label>Adresa:</label>
            <input
              type="text"
              name="adresa"
              value={formData.adresa}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Způsob platby:</label>
            <select name="platba" value={formData.platba} onChange={handleChange}>
              <option value="kartou">Kartou</option>
              <option value="dobirka">Dobírka</option>
              <option value="prevodem">Převodem</option>
            </select>

            <button type="submit">Odeslat objednávku</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
