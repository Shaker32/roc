import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DetailProduktu.css";


const products = [
  { id: 1, name: "Terárium XL", category: "Terária", image: "/assets/img/terarium.png", description: "Velké terárium ideální pro hady a ještěry.", price: "3 500 Kč" },
  { id: 2, name: "Klec pro papoušky", category: "Klece", image: "/assets/img/klec.png", description: "Prostorná klec vhodná pro velké papoušky.", price: "2 000 Kč" },
  { id: 3, name: "Akvarijní filtr", category: "Akvária", image: "/assets/img/filtr.png", description: "Výkonný filtr pro čistou vodu ve vašem akváriu.", price: "1 200 Kč" },
  { id: 4, name: "UVB žárovka", category: "Osvětlení", image: "/assets/img/uvb.png", description: "Důležité UVB světlo pro zdraví plazů.", price: "700 Kč" },
  { id: 5, name: "Topný kámen", category: "Vyhřívání", image: "/assets/img/kamen.png", description: "Zajišťuje optimální teplotu pro plazy.", price: "900 Kč" },
  { id: 6, name: "Vitamíny pro plazy", category: "Krmivo", image: "/assets/img/vitaminy.png", description: "Komplexní vitamíny pro zdraví vašeho plaza.", price: "500 Kč" },
];

export default function ProduktDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Produkt nenalezen</h2>;
  }

  return (
    <div>
      <Header />
      <div className="product-detail-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p><strong>Kategorie:</strong> {product.category}</p>
          <p><strong>Popis:</strong> {product.description}</p>
          <p><strong>Cena:</strong> {product.price}</p>
          <button className="order-button">Objednat</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
