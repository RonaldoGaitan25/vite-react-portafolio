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
import html from './assets/html_logo.png';
import java from './assets/javascript_logo.png';
import react from './assets/react-logo.png';
import photo from './assets/photoshop_logo.png';


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
        <p>Este es un encriptador de texto básico funcional. Esta herramienta tiene la capacidad de encriptar y desencriptar cualquier texto que ingreses.</p>
        <a href="https://ronaldogaitan25.github.io/challenge-encriptadorONE/" target="_blank" rel="noopener noreferrer">"¡Encripta tu texto con un clic!"</a>
      </div>
      <div className="project-image">
        <a href="https://ronaldogaitan25.github.io/challenge-encriptadorONE/" target="_blank" rel="noopener noreferrer">
          <img src={encrip} alt="Proyecto 1" />
        </a>
      </div>
    </div>
    <div className="project">
      <div className="project-info">
        <h3>Prortafolio-html</h3>
        <p>Este proyecto presenta mi primer portafolio, construido únicamente con HTML y CSS, marcando mis primeros pasos en el desarrollo web.</p>
        <a href="https://ronaldogaitan25.github.io/portafolio/" target="_blank" rel="noopener noreferrer">"¡Echa un vistazo a mi primer portafolio hecho solo con HTML y CSS!"</a>
      </div>
      <div className="project-image">
        <a href="https://ronaldogaitan25.github.io/portafolio/" target="_blank" rel="noopener noreferrer">
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
      <p>¡Hola! Soy Ronaldo, cuento con una fuerte capacidad de adaptación y una actitud abierta hacia el aprendizaje continuo. Obtuve experiencia en los cursos de AluraLatam  me ha permitido enfrentar desafíos con flexibilidad y encontrar soluciones innovadoras. Siempre estoy buscando nuevas oportunidades para crecer y aprender, ya sea explorando nuevas tecnologías o colaborando en proyectos emocionantes. Con un enfoque proactivo y una mentalidad de crecimiento, estoy entusiasmado por las oportunidades futuras y por seguir evolucionando en mi carrera profesional.

</p>
      <p>Mi Edad: 26</p>
      <p>Perfil Junior: Desarrollo Web Frontend y Edición de Fotos
Como aspirante en desarrollo web frontend, estoy aprendiendo a crear interfaces atractivas con HTML, CSS y JavaScript. También estoy explorando la edición de fotos para mejorar la calidad visual de mis proyectos. Comprometido con mi crecimiento, estoy abierto a aprender y mejorar continuamente en estas áreas. </p>
      
      <div className="icon-row">
        <img src={photo} alt="Photoshop" />
        <img src={html} alt="HTML" />
        <img src={java} alt="JavaScript" />
        <img src={react} alt="React" />
      </div>
    </div>
  </section>
)}
  <footer>
    <p>© 2024 [---]. Todos los derechos reservados. | Desarrollado con ❤️ utilizando React + Vite y JavaScript por [Ronaldo Gaitan]. Desarrollado desde cero. </p>
  </footer>

    </div>
  );
}

export default Home;
