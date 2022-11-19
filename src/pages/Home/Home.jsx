import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-1.svg";
import Logo1 from "../../assets/Rick-And-Morty-Logo1.png";

import "./Home.modules.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <img src={Logo} alt="logo" />
        <img src={Logo1} alt="logo2" />
        <h2 style={{ color: "white", textAlign: "center" }}>
          Bienvenido a Rick and Morty
        </h2>
        <p style={{ color: "white", padding: "10px", textAlign: "center" }}>
          En esta prueba , evaluaremos su capacidad para construir la aplicacion
          mediante el analisis de codigo y la reproduccion del siguiente diseño
        </p>
        <Link to="/allCharacters">
          <button className="btn">Continuar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
