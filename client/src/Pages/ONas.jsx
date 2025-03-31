import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ONas.css";

export default function ONas() {
  return (
    <div>
      <Header />
      <div className="onas-container">
        <h1>O nás</h1>
        <p>
          Vítejte v našem obchodě s exotickými zvířaty! Naším cílem je přinést
          vám ty nejkvalitnější produkty pro vaše mazlíčky a zajistit jim
          maximální pohodlí a péči.
        </p>
        <h2>Naše mise</h2>
        <p>
          Jsme tým nadšenců, kteří milují zvířata a věří, že každý mazlíček si
          zaslouží tu nejlepší péči. Proto nabízíme široký sortiment produktů,
          které jsou pečlivě vybírány s ohledem na kvalitu a bezpečnost.
        </p>
        <h2>Proč nakupovat u nás?</h2>
        <ul>
          <li>Široká nabídka exotických zvířat a potřeb</li>
          <li>Odborné poradenství od zkušených chovatelů</li>
          <li>Bezpečné a pohodlné nakupování</li>
          <li>Rychlé dodání a skvělý zákaznický servis</li>
        </ul>
        <h2>Kontaktujte nás</h2>
        <p>
          Máte dotazy? Rádi vám pomůžeme! Kontaktujte nás prostřednictvím našeho
          <a href="/kontakt"> kontaktního formuláře</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
}
