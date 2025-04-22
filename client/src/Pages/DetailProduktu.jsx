import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DetailProduktu.css";

export default function ProduktDetail() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Chyba při načítání produktu:", err));
  }, [id]);

  if (!product) {
    return (
      <div>
        <Header />
        <div className="product-detail-container">
          <h2>Produkt nenalezen</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="product-detail-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p><strong>Kategorie:</strong> {product.category}</p>
          <p><strong>Popis:</strong> {product.description}</p>
          <p><strong>Cena:</strong> {product.price} Kč</p>
          <button className="order-button">Objednat</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}