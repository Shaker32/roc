import React from "react";
import "../Header/Header.css"; 
import logo from "../../assets/Img/ExotiX.png";

const HomePage = () => {
  return (
    <div>
     
      <header className="header">
      <img src="/Img/ExotiX.png" alt="ExotiX Logo" />
      
        <h1>ExotiX</h1>
        <nav>
          <a href="/" className="menu-button">Domů</a>
          <a href="Obchod" className="menu-button">Obchod</a>
          <a href="#contact" className="menu-button">Kontakt</a>
          <a href="#about" className="menu-button">O nás</a>
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
