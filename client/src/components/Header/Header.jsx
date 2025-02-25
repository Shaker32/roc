import logo from "../../assets/Img/logoExotiX.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 style={{ color: '#D4AF37' }}>ExotiX</h1>
        <p>Luxusní exotická zvířata</p>
        <div className="logo">
          <img src={logo} alt="ExotiX Logo" />
        </div>
      </header>
    </>
  );
}
