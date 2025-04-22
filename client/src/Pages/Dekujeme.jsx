import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Objednavka.css";

export default function Dekujeme() {
  return (
    <div>
      <Header />
      <div className="order-thankyou-container">
        <h2>Děkujeme za objednávku!</h2>
        <p>Brzy se vám ozveme ohledně doručení.</p>
      </div>
      <Footer />
    </div>
  );
}

