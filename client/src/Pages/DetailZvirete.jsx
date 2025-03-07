import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DetailZvirete.css";

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

export default function DetailZvirete() {
  const { id } = useParams();
  const animal = animals.find((animal) => animal.id === parseInt(id));

  if (!animal) {
    return <p>Zvíře nebylo nalezeno.</p>;
  }

  return (
    <div>
      <Header />
      <div className="detail-container">
        <img src={animal.image} alt={animal.name} />
        <div className="detail-info">
          <h2>{animal.name}</h2>
          <p><strong>Kategorie:</strong> {animal.category}</p>
          <p>{animal.description}</p>
          <p className="price"><strong>Cena:</strong> {animal.price}</p>
          <button className="buy-button">Koupit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
