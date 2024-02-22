import React from 'react';
import './Home.css';
import Banner from './Banner.png';

function Home () {
  return (
    <div>
      <h1>Hola</h1>
      <ul>
        <li>Inicio</li>
        <li>Medio</li>
        <li>Final</li>
      </ul>
      <img src={Banner} alt="" />
    </div>
  );
};

export default Home;
