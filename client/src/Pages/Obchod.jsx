import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Obchod.css";

export default function Obchod() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category")?.toLowerCase() || "vše";

  const [category, setCategory] = useState(initialCategory);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/animals")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
      })
      .catch((err) => console.error("Chyba při načítání zvířat:", err));
  }, []);

  const categoryOptions = [
    { value: "vše", label: "Vše" },
    { value: "plaz", label: "Plazi" },
    { value: "pták", label: "Ptáci" },
    { value: "savci", label: "Savci" },
    { value: "bezobratlí", label: "Bezobratlí" },
    { value: "obojživelníci", label: "Obojživelníci" },
    { value: "vodní živočichové", label: "Vodní živočichové" },
  ];

  const filteredAnimals =
    category === "vše"
      ? animals
      : animals.filter(
          (animal) =>
            animal.category?.toLowerCase().trim() === category.trim()
        );

  return (
    <div>
      <Header />
      <div className="shop-container">
        <h2>Obchod s exotickými zvířaty</h2>
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
        <div className="animal-list">
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map((animal) => (
              <div key={animal._id} className="animal-card">
                <Link to={`/zvire/${animal._id}`} className="no-decoration">
                  <img src={animal.image} alt={animal.name} />
                  <h3>{animal.name}</h3>
                  <p>{animal.category}</p>
                  <p className="price">{animal.price} Kč</p>
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
