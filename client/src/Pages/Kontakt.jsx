import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Kontakt.css";

export default function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Zpráva byla úspěšně odeslána.");
        
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage(data.error || "Došlo k chybě při odesílání zprávy.");
      }
    } catch (error) {
      setResponseMessage("Došlo k chybě při odesílání zprávy.");
      console.error("Error:", error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <label>Jméno:</label>
            <input
              type="text"
              placeholder="Vaše jméno"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              placeholder="Váš email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Zpráva:</label>
            <textarea
              placeholder="Vaše zpráva"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">Odeslat</button>
          </form>

          
          {responseMessage && (
            <p className={responseMessage.includes("úspěšně") ? "success" : "error"}>
              {responseMessage}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
