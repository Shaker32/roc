import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ChovatelskePotreby.css";

export default function ChovatelskePotreby() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "Vše";

  const [category, setCategory] = useState(initialCategory);
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3000/api/products")  
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Chyba při načítání produktů:", err));
  }, []);

 
  const filteredProducts = category === "Vše"
    ? products
    : products.filter(product => product.category === category);

  return (
    <div>
      <Header />
      <div className="shop-container">
        <h2>Chovatelské potřeby</h2>
        <p>Najděte ty nejlepší produkty pro vaše exotické mazlíčky.</p>

        <div className="filter-container">
          <label>Filtr podle kategorie:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Vše">Vše</option>
            <option value="Terária">Terária</option>
            <option value="Klece">Klece</option>
            <option value="Akvária">Akvária</option>
            <option value="Osvětlení">Osvětlení</option>
            <option value="Vyhřívání">Vyhřívání</option>
            <option value="Krmivo">Krmivo</option>
          </select>
        </div>

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/produkt/${product.id}`} className="no-decoration">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <p className="price">{product.price}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>Žádné produkty v této kategorii.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
