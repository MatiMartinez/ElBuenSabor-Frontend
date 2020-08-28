import React from "react";

import "./SelectHome.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";

export default function SelectHome() {
  const { userdb } = useAuth0();

  function HomeCocinero() {
    return (
      <div className="col-6 col-lg-3">
        <Link className="select-home-link" to="/cocina/pedidos">
          <i className="fas fa-hamburger fas-border icon-circle-border"></i>
          <h6 className="text-muted mt-4">COCINERO</h6>
        </Link>
      </div>
    );
  }

  function HomeCajero() {
    return (
      <div className="col-6 col-lg-3">
        <Link className="select-home-link" to="/caja">
          <i className="fas fa-cash-register icon-circle-border" />
          <h6 className="text-muted mt-4">CAJERO</h6>
        </Link>
      </div>
    );
  }

  function HomeAdmin() {
    return (
      <div className="col-6 col-lg-3">
        <Link className="select-home-link" to="/admin/cocina/insumos">
          <i className="fas fa-user-cog icon-circle-border"></i>
          <h6 className="text-muted mt-4">ADMINISTRADOR</h6>
        </Link>
      </div>
    );
  }

  function HomeCatalog() {
    return (
      <div className="col-6 col-lg-3">
        <Link className="select-home-link" to="/catalog">
          <i className="fas fa-store icon-circle-border"></i>
          <h6 className="text-muted mt-4">CATÁLOGO</h6>
        </Link>
      </div>
    );
  }

  return (
    <div className="select-home">
      <h4 className="container mt-5 mb-5 select-home-title">
        SELECCIONA EL TIPO DE USUARIO
      </h4>
      <div className="mt-5 d-flex justify-content-center">
        <div className="container row">
          {userdb.roles.map((rol, index) => {
            if (rol.nombreRol === "Administrador") {
              return <HomeAdmin key={index} />;
            }
            return null;
          })}
          {userdb.roles.map((rol, index) => {
            if (rol.nombreRol === "Cocinero") {
              return <HomeCocinero key={index} />;
            }
            return null;
          })}
          {userdb.roles.map((rol, index) => {
            if (rol.nombreRol === "Cajero") {
              return <HomeCajero key={index} />;
            }
            return null;
          })}
          <HomeCatalog />
        </div>
      </div>
    </div>
  );
}
