import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Kontakt.css";

export default function Kontakt() {
  return (
    <div>
      <Header />
      <div className="contacts-container">
        <h1>Kontaktujte nás</h1>
        <p>Máte dotazy? Jsme tu pro vás!</p>

        <div className="contact-info">
          <h2>Naše informace</h2>
          <p><strong>Telefon:</strong> +420 123 456 789</p>
          <p><strong>Email:</strong> info@ExotiX.cz</p>
          <p><strong>Adresa:</strong> Pařížská 123, Praha, Česká republika</p>
        </div>

        <div className="contact-form">
          <h2>Napište nám</h2>
          <form>
            <label>Jméno:</label>
            <input type="text" placeholder="Vaše jméno" required />
            
            <label>Email:</label>
            <input type="email" placeholder="Váš email" required />
            
            <label>Zpráva:</label>
            <textarea placeholder="Vaše zpráva" required></textarea>
            
            <button type="submit">Odeslat</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}