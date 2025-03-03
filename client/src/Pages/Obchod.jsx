import React, { useState } from "react";
import Header from "../components/Header/Header";
import "./Obchod.css";

const animals = [
  { id: 1, name: "chameleon", category: "Plaz", image: "../src/assets/img/chameleon.png" },
  { id: 2, name: "papoušek ara", category: "Pták", image: "../src/assets/img/ara.png" },
  { id: 3, name: "leguán", category: "Plaz", image: "../src/assets/img/leguan.png" },
  { id: 4, name: "lvíček zlatý", category: "Savci", image: "../src/assets/img/lvicek.png" },
  { id: 5, name: "sklípkan největší", category: "Bezobraltí", image: "../src/assets/img/sklipkan.png"},
  { id: 6, name: "skokan zelený", category: "Obojživelnící", image: "../src/assets/img/skokan.png"},
  { id: 7, name: "chobotnice kroužkovaná", category: "Vodní živočichové", image: "../src/assets/img/chobotniceK.png" },

];

export default function Obchod() {
  const [category, setCategory] = useState("Vše");

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
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="Vše">Vše</option>
            <option value="Plaz">Plazi</option>
            <option value="Pták">Ptáci</option>
            <option value="Savci">Savci</option>
            <option value="Bezobraltí">Bezobraltí</option>
            <option value="Obojživelnící">Obojživelnící</option>¨
            <option value="Vodní živočichové">Vodní živočichové</option>
          </select>
        </div>
        <div className="animal-list">
          {filteredAnimals.map((animal) => (
            <div key={animal.id} className="animal-card">
              <img src={animal.image} alt={animal.name} />
              <h3>{animal.name}</h3>
              <p>{animal.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
