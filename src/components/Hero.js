import React from 'react';

import ImgTaco from '../assets/tacos-img.jpg';
import ImgMobile from '../assets/mobile.png';
import ImgDesktop from '../assets/desktop.png';

import './Hero.css';

const Hero = () => (
  <div className="container mt-5 mb-5">
    <div className="row d-flex">
      <div className="col-5 d-flex flex-column justify-content-between">
        <h1 className="display-3">FRESCO</h1>
        <h1 className="display-3">RICO</h1>
        <h1 className="display-3">AUTÉNTICO</h1>
      </div>
      <div className="col-7">
        <div className="row">
          <div className="col-6">
            <img
              src={ImgTaco}
              alt="img-taco"
              width="300px"
              className="img-landing"
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-around pl-5">
            <div className="border-content-img-landing">
              <div className="content-img-landing">
                <img src={ImgDesktop} alt="img-desktop" width="60px" />
              </div>
            </div>
            <div className="border-content-img-landing">
              <div className="content-img-landing">
                <img src={ImgMobile} alt="img-mobile" width="60px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
