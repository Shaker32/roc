import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DetailZvirete.css";

export default function DetailZvirete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    fetch(`http://localhost:3000/api/animals/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Zvíře nebylo nalezeno.");
        }
        return res.json();
      })
      .then((data) => {
        setAnimal(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleBuy = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    for (let i = 0; i < quantity; i++) {
      cart.push(animal);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/kosik");
  };

  if (loading) return <p>Načítání...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <div className="detail-container">
        <img src={animal.image} alt={animal.name} />
        <div className="detail-info">
          <h2>{animal.name}</h2>
          <p><strong>Kategorie:</strong> {animal.category}</p>
          <p>{animal.description}</p>
          <p className="price"><strong>Cena:</strong> {animal.price} Kč</p>

          
          <div className="quantity-select">
            <label htmlFor="quantity">Počet kusů:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>

          <button className="buy-button" onClick={handleBuy}>
            Koupit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
