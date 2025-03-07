import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Obchod.css";
import chameleonImg from "../assets/img/chameleon.png";
import araImg from "../assets/img/ara.png";
import leguanImg from "../assets/img/leguan.png";
import lvicekImg from "../assets/img/lvicek.png";
import sklipkanImg from "../assets/img/sklipkan.png";
import skokanImg from "../assets/img/skokan.png";
import chobotniceImg from "../assets/img/chobotniceK.png";

const animals = [
  { id: 1, name: "Chameleon", category: "Plaz", image: chameleonImg, description: "Chameleon je fascinující tvor měnící barvy.", price: "5 000 Kč" },
  { id: 2, name: "Papoušek Ara", category: "Pták", image: araImg, description: "Barevný a inteligentní papoušek vhodný pro domácí chov.", price: "15 000 Kč" },
  { id: 3, name: "Leguán", category: "Plaz", image: leguanImg, description: "Tropický ještěr vhodný pro zkušené chovatele.", price: "7 500 Kč" },
  { id: 4, name: "Lvíček Zlatý", category: "Savci", image: lvicekImg, description: "Malá opička s výraznou zlatou srstí.", price: "30 000 Kč" },
  { id: 5, name: "Sklípkan Největší", category: "Bezobratlí", image: sklipkanImg, description: "Jeden z největších pavouků na světě.", price: "2 000 Kč" },
  { id: 6, name: "Skokan Zelený", category: "Obojživelníci", image: skokanImg, description: "Žába s krásnou zelenou barvou.", price: "1 200 Kč" },
  { id: 7, name: "Chobotnice Kroužkovaná", category: "Vodní živočichové", image: chobotniceImg, description: "Jedna z nejjedovatějších chobotnic.", price: "50 000 Kč" },
];


export default function Obchod() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "Vše";

  const [category, setCategory] = useState(initialCategory);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

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
          {filteredAnimals.map((animal) => (
            <div key={animal.id} className="animal-card">
              <Link to={`/zvire/${animal.id}`} className="no-decoration">
                <img src={animal.image} alt={animal.name} />
                <h3>{animal.name}</h3>
                <p>{animal.category}</p>
                <p className="price">{animal.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
}
