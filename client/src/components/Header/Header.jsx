import React from "react";
import "../Header/Header.css"; 
import logo from "../../assets/img/logoWhite.png";
import kosik from "../../assets/img/kosik.png";



const HomePage = () => {
  return (
    <div>
     
      <header className="header">

  <a href="/" className="logo">
          <img src={logo} alt="logo" className="logo" />
        </a>
      
        <nav>

          <a href="obchod" className="menu-button">Obchod zvířat</a>
          <a href="chovatelske-potreby" className="menu-button">Chovatelské potřeby</a>
          <a href="prodej-zvire" className="menu-button">Prodej zvíře</a>
          <a href="kontakt" className="menu-button">Kontakt</a>
          <a href="recenze" className="menu-button">Recenze</a>
          <a href="o-nas" className="menu-button">O nás</a>

        </nav>

        <a href="kosik" className="cart-icon">
          <img src={kosik} alt="košík" className="cart-image" />
        </a>
 
      </header>
    </div>
  );
};

export default HomePage;
