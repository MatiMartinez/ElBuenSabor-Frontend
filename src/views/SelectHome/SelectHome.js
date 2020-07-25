import React from "react";

import "./SelectHome.css";
import { Link } from "react-router-dom";

export default function SelectHome({ roles }) {
  function HomeCocinero() {
    return (
      <Link className="icon-container p-4 m-4" to="/cocina">
        <i className="fas fa-utensils fa-8x"></i>
      </Link>
    );
  }

  function HomeCajero() {
    return (
      <Link className="icon-container p-4 m-4" to="/caja">
        <i className="fas fa-cash-register fa-8x"></i>
      </Link>
    );
  }

  function HomeAdmin() {
    return (
      <Link className="icon-container p-4 m-4" to="/admin">
        <i className="fas fa-user-cog fa-8x"></i>
      </Link>
    );
  }

  function HomeCatalog() {
    return (
      <Link className="icon-container p-4 m-4" to="/">
        <i className="fas fa-store fa-8x"></i>
      </Link>
    );
  }

  return (
    <div className="mt-5 d-flex justify-content-center">
      <div className="d-flex justify-content-center home-container p-4">
        <HomeCajero />
        <HomeCocinero />
        <HomeAdmin />
        <HomeCatalog />
      </div>
    </div>
  );
}
