import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ChovatelskePotreby.css";

export default function ChovatelskePotreby() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category")?.toLowerCase() || "vše";

  const [category, setCategory] = useState(initialCategory);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Chyba při načítání produktů:", err));
  }, []);

  const categoryOptions = [
    { value: "vše", label: "Vše" },
    { value: "terária", label: "Terária" },
    { value: "klece", label: "Klece" },
    { value: "akvária", label: "Akvária" },
    { value: "osvětlení", label: "Osvětlení" },
    { value: "vyhřívání", label: "Vyhřívání" },
    { value: "krmivo", label: "Krmivo" },
  ];

  const filteredProducts =
    category === "vše"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase().trim() === category.trim()
        );

  return (
    <div>
      <Header />
      <div className="shop-container">
        <h2>Chovatelské potřeby</h2>
        <p>Najděte ty nejlepší produkty pro vaše exotické mazlíčky.</p>

        <div className="filter-container">
          <label>Filtr podle kategorie:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categoryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="product-card">
                <Link to={`/produkt/${product._id}`} className="no-decoration">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <p className="price">{product.price} Kč</p>
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
