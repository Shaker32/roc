import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./HomePage.css"; 


export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="home-container">
        <h1>Vítejte v našem obchodě s exotickými zvířaty!</h1>
        <p>V našem e-shopu najdete širokou nabídku exotických zvířat, chovatelských potřeb a dalších produktů pro vaše zvířecí přátele.</p>

        <div className="category-section">
          <h2>Naše kategorie</h2>
          <div className="category-list">
            <div className="category-card">
              <img src="../src/assets/img/plazi.png" alt="Plazi" />
              <h3>Plazi</h3>
              <p>Široká nabídka plazů pro začínající i pokročilé chovatele.</p>
              <button className="shop-now">Prozkoumat</button>
            </div>

            <div className="category-card">
              <img src="../src/assets/img/ptaci.png" alt="Ptáci" />
              <h3>Ptáci</h3>
              <p>Objevte nádherné ptáky různých druhů a barev.</p>
              <button className="shop-now">Prozkoumat</button>
            </div>

            <div className="category-card">
              <img src="../src/assets/img/savci.png" alt="Savci" />
              <h3>Savci</h3>
              <p>Najděte svého nového mazlíčka mezi našimi savci.</p>
              <button className="shop-now">Prozkoumat</button>
            </div>

            <div className="category-card">
              <img src="../src/assets/img/obojzivelnici.png" alt="Obojživelníci" />
              <h3>Obojživelníci</h3>
              <p>Chováte obojživelníky? Máme pro vás vše potřebné.</p>
              <button className="shop-now">Prozkoumat</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
