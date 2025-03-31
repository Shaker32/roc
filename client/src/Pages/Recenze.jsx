import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Recenze.css";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    { name: "Jana Nováková", text: "Skvělý obchod! Nákup byl rychlý a zvíře dorazilo v perfektním stavu." },
    { name: "Petr Svoboda", text: "Profesionální přístup a široký výběr. Určitě doporučuji!" },
    { name: "Lucie Dvořáková", text: "Můj nový papoušek je úžasný! Děkuji za skvělý servis." }
  ]);

  const [newReview, setNewReview] = useState({ name: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", text: "" });
    }
  };

  return (
    <div>
      <Header />
      <div className="reviews-container">
        <h1>Recenze zákazníků</h1>
        <p>Podívejte se, co o nás říkají naši zákazníci!</p>

        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>

        <div className="review-form">
          <h2>Přidejte svou recenzi</h2>
          <form onSubmit={handleSubmit}>
            <label>Jméno:</label>
            <input
              type="text"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              placeholder="Vaše jméno"
              required
            />
            
            <label>Recenze:</label>
            <textarea
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              placeholder="Vaše recenze"
              required
            ></textarea>
            
            <button type="submit">Odeslat</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}