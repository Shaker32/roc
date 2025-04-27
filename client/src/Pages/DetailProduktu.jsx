import React, { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DetailProduktu.css";

export default function ProduktDetail() {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);  

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Chyba při načítání produktu:", err));
  }, [id]);

  const handleBuy = () => {
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
   
    for (let i = 0; i < quantity; i++) {
      cart.push(product);
    }
    

    localStorage.setItem("cart", JSON.stringify(cart));
    

    navigate("/kosik");
  };

  if (!product) {
    return (
      <div>
        <Header />
        <div className="detail-container">
          <h2>Produkt nenalezen</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="detail-container">
        <img src={product.image} alt={product.name} />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p><strong>Kategorie:</strong> {product.category}</p>
          <p><strong>Popis:</strong> {product.description}</p>
          <p className="price"><strong>Cena:</strong> {product.price} Kč</p>


          <div className="quantity-select">
            <label htmlFor="quantity">Počet kusů:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>

         
          <button className="buy-button" onClick={handleBuy}>
            Koupit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
