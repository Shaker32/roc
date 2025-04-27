import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./PlatbaKartou.css";

export default function PlatbaKartou() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card details submitted:", formData);
    navigate("/shrnutí");
  };

  return (
    <div>
      <Header />
      <div className="payment-wrapper">
        <div className="payment-card">
          <h2>Platba kartou</h2>
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-row">
              <label>Číslo karty</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                maxLength="16"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="form-row small-inputs">
              <div>
                <label>Datum expirace</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  required
                  maxLength="5"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label>CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  required
                  maxLength="3"
                  placeholder="CVC"
                />
              </div>
            </div>

            <button type="submit">Potvrdit platbu</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
