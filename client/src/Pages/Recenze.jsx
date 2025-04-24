import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Recenze.css";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });

  useEffect(() => {
    fetch("http://localhost:3000/api/recenze")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/recenze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((savedReview) => {
        setReviews([savedReview, ...reviews]);
        setNewReview({ name: "", text: "", rating: 5 });
      });
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
              <p><strong>Hodnocení:</strong> {review.rating}/5</p>
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
            />
            <label>Hodnocení (1–5):</label>
            <input
              type="number"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              required
            />
            <button type="submit">Odeslat</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
