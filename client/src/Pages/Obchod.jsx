import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Obchod.css";

export default function Obchod() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "Vše";

  const [category, setCategory] = useState(initialCategory);
  const [animals, setAnimals] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3000/api/animals") 
      .then((res) => res.json())
      .then((data) => setAnimals(data))
      .catch((err) => console.error("Chyba při načítání zvířat:", err));
  }, []);

  
  const filteredAnimals = category === "Vše"
    ? animals
    : animals.filter(animal => animal.category === category);

  return (
    <div>
      <Header />
      <div className="shop-container">
        <h2>Obchod s exotickými zvířaty</h2>
        <div className="filter-container">
          <label>Filtr podle kategorie:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Vše">Vše</option>
            <option value="Plaz">Plazi</option>
            <option value="Pták">Ptáci</option>
            <option value="Savci">Savci</option>
            <option value="Bezobratlí">Bezobratlí</option>
            <option value="Obojživelníci">Obojživelníci</option>
            <option value="Vodní živočichové">Vodní živočichové</option>
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
                  <p className="price">{animal.price}</p>
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
