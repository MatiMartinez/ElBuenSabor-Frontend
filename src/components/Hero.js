import React from 'react';

import ImgCook from '../assets/cook-red.png';

import './Hero.css';

const Hero = () => (
  <div className="landing-img">
    <div className="container d-flex h-100 p-5">
      <div className="d-flex flex-column justify-content-around">
        <h1>Comida Premium y En Un Instante</h1>
        <h4>Con productos naturales</h4>
        <a
          className="btn btn-start-now rounded-0 w-75 text-decoration-none pl-5 pr-5 p-3"
          href="/login"
        >
          ORDENA YA
        </a>
      </div>
      <div className="d-flex justify-content-start align-items-center">
        <img src={ImgCook} alt="" width="100%" />
      </div>
    </div>
  </div>
);

export default Hero;
