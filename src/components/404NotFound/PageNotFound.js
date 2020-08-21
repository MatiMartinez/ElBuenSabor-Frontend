import React, { useEffect } from "react";

import "./PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    document.getElementById("navbar-user").style.display = "none";
    document.getElementById("footer-user").style.display = "none";
    return () => {
      document.getElementById("navbar-user").style.display = "block";
      document.getElementById("footer-user").style.display = "block";
    };
  }, []);

  return (
    <div className="page-not-found-view">
      <i className="far fa-sad-tear fa-10x"></i>
      <h6>Lo sentimos, página no encontrada.</h6>
      <Link className="btn btn-dark btn-lg rounded-0" to="/">
        Ir a la página principal
      </Link>
    </div>
  );
}
