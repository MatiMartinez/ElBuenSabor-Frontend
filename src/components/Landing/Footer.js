import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer text-center p-5">
    <div className="container d-flex justify-content-between social-data-content">
      {/** Iconos de social media */}
      <div className="footer-items d-flex align-items-center">
        <ul className="d-flex p-0">
          <li>
            <a href="/" className="mr-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/" className="mr-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      {/** Localizacion y horarios */}
      <div className="d-flex flex-row location-attention">
        <div className="mr-3">
          <h4 className="mb-3 color-golden">Localización</h4>
          <p className="mb-0 font-weight-200">San Martín 1945</p>
          <p className="font-weight-200">Mendoza, Ciudad</p>
        </div>
        <div className="ml-3">
          <h4 className="mb-3 color-golden">Horario</h4>
          <p className="mb-0 font-weight-200">Lun - Sab, 12pm - 8pm</p>
          <p className="font-weight-200">Dom, 5pm - 8pm </p>
        </div>
      </div>
    </div>
    {/** --------------------------------------------------------------------------------- */}
    <div className="container">
      <hr className="h-0 bg-white" />
      <div className="d-flex flex-column justify-content-center">
        {/** Links del footer */}
        <div className="links">
          <a href="/" className="mr-3">
            Nosotros
          </a>
          <a href="/" className="mr-3">
            Privacidad
          </a>
          <a href="/">Terminos</a>
        </div>
        {/** Derechos reservados */}
        <div className="copyright mt-3">
          <p>
            <small>El Buen Sabor - Todos los derechos reservados</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
