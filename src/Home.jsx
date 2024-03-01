/*import React from 'react';
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
*/

import React, { useState } from 'react';
import './Home.css';
import Banner from './Banner.png';
import imagen1 from './Experiencia/imagen-1.jpg';
import imagen2 from './Experiencia/imagen-2.jpg';
import imagen3 from './Experiencia/imagen-3.jpg';
import imagen4 from './Experiencia/imagen-4.jpg';
import imagen5 from './Experiencia/imagen-5.jpg';
import imagen6 from './Experiencia/imagen-6.jpg';
import imagen7 from './Experiencia/imagen-7.jpg';
import imagen8 from './Experiencia/imagen-8.jpg';
import imagen9 from './Experiencia/imagen-9.png';
import imagen10 from './Experiencia/imagen-10.png';
import imagen11 from './Experiencia/imagen-11.jpg';
import portafolio from './assets/portafolio-v1.png';
import encrip from './assets/encriptador.png';


function Home() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const handleClick = (page) => {
    console.log('pagina actual:', page)
    setCurrentPage(page);
  };

  return (
    <div>
      <header>
        <div className="logo">
          {/* Coloca aquí tu logo */}
          <h1 className='nombre-logo' data-text="onaldo">R</h1>
          
        </div>
        <nav>
          <ul className="menu">
            <li><button onClick={() => handleClick('inicio')}>Inicio</button></li>
            <li><button onClick={() => handleClick('experiencia')}>Experiencia</button></li>
            <li><button onClick={() => handleClick('proyectos')}>Proyectos</button></li>
            <li><button onClick={() => handleClick('sobre-mi')}>Sobre Mí</button></li>
          </ul>
        </nav>
      </header>

      {currentPage === 'inicio' && (
        <section id="inicio">
          <img className='banner' src={Banner} alt='banner' />
          {/* Aquí va el contenido del banner */}
        </section>
      )}

{currentPage === 'experiencia' && (
  <section id="experiencia">
    <div className="experience-header">
      <h2>Experiencia</h2>
      <p>Aquí está una colección sobre edicion de imagen:</p>
 </div>
 <div className="experience-grid">
   <img src={imagen1} alt="Imagen 1" />
   <img src={imagen2} alt="Imagen 1" />
   <img src={imagen3} alt="Imagen 1" />
   <img src={imagen4} alt="Imagen 1" />
   <img src={imagen5} alt="Imagen 1" />
   <img src={imagen6} alt="Imagen 1" />
   <img src={imagen7} alt="Imagen 1" />
   <img src={imagen8} alt="Imagen 1" />
   <img src={imagen9} alt="Imagen 1" />
   <img src={imagen10} alt="Imagen 1" />
   <img src={imagen11} alt="Imagen 1" />

   
 </div>
  </section>
)}

{currentPage === 'proyectos' && (
  <section id="proyectos">
    <div className="section-title">
      <h2>Proyectos</h2>
      <p>Aquí están algunos de mis proyectos:</p>
    </div>
    <div className="project">
      <div className="project-info">
        <h3>Encriptador de Texto</h3>
        <p>Descripción del proyecto 1.</p>
        <a href="enlace-del-proyecto-1">Enlace al proyecto 1</a>
      </div>
      <div className="project-image">
        <a href="enlace-del-proyecto-1">
          <img src={encrip} alt="Proyecto 1" />
        </a>
      </div>
    </div>
    <div className="project">
      <div className="project-info">
        <h3>Prortafolio-html</h3>
        <p>Descripción del proyecto 2.</p>
        <a href="enlace-del-proyecto-2">Enlace al proyecto 2</a>
      </div>
      <div className="project-image">
        <a href="enlace-del-proyecto-2">
          <img src={portafolio} alt="Proyecto 2" />
        </a>
      </div>
    </div>
  </section>
)}

{currentPage === 'sobre-mi' && (
  <section id="sobre-mi">
    <div className="section-title">
      <h2>Sobre Mí</h2>
    </div>
    <div className="about-me">
      <p>Nombre: Ronaldo</p>
      <p>Edad: 26</p>
      <p>Conocimientos: Lenguajes de programación y editores de fotos </p>
      
    </div>
  </section>
)}
  <footer>
    <p>Texto</p>
  </footer>

    </div>
  );
}

export default Home;
