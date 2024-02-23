import React from 'react';
import './Home.css';
import Banner from './Banner.png';

function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="./assets/2montaña_logo_2.png" alt="Logo" />
          <span>Nombre</span>
        </div>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Medio</li>
            <li>Final</li>
          </ul>
        </nav>
      </div>
      <div className="banner">
        <img src={Banner} alt="Banner" />
        <div className="banner-text">
          <h2>Título principal</h2>
          <p>Texto secundario</p>
        </div>
      </div>
      <footer className="footer">
        Este es el footer.
      </footer>
    </div>
  );
}

export default Home;
