import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><a href="#about">O nás</a></li>
            <li><a href="#contact">Kontakt</a></li>
            <li><a href="#privacy">Podmínky ochrany osobních údajů</a></li>
            <li><a href="#terms">Obchodní podmínky</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <p>Navštivte nás na sociálních sítích:</p>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>

        <div className="footer-info">
          <p>&copy; 2025 E-shop pro zvířata | Všechna práva vyhrazena</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
