import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ChovatelskePotreby.css";

const products = [
  { id: 1, name: "Terárium XL", category: "Terária", image: "/assets/img/terarium.png" },
  { id: 2, name: "Klec pro papoušky", category: "Klece", image: "/assets/img/klec.png" },
  { id: 3, name: "Akvarijní filtr", category: "Akvária", image: "/assets/img/filtr.png" },
  { id: 4, name: "UVB žárovka", category: "Osvětlení", image: "/assets/img/uvb.png" },
  { id: 5, name: "Topný kámen", category: "Vyhřívání", image: "/assets/img/kamen.png" },
  { id: 6, name: "Vitamíny pro plazy", category: "Krmivo", image: "/assets/img/vitaminy.png" },
];

export default function ChovatelskePotreby() {
  const [category, setCategory] = useState("Vše");

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
          <select onChange={(e) => setCategory(e.target.value)}>
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
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/produkt/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
