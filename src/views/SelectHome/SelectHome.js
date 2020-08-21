import React from "react";

import "./SelectHome.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";

export default function SelectHome() {
  const { userdb } = useAuth0();

  function HomeCocinero() {
    return (
      <Link className="select-home-link" to="/cocina">
        <i className="fas fa-hamburger fa-6x fas-border icon-circle-border"></i>
        <h6 className="text-muted mt-5">COCINERO</h6>
      </Link>
    );
  }

  function HomeCajero() {
    return (
      <Link className="select-home-link" to="/caja">
        <i className="fas fa-cash-register fa-6x icon-circle-border" />
        <h6 className="text-muted mt-5">CAJERO</h6>
      </Link>
    );
  }

  function HomeAdmin() {
    return (
      <Link className="select-home-link" to="/admin">
        <i className="fas fa-user-cog fa-6x icon-circle-border"></i>
        <h6 className="text-muted mt-5">ADMINISTRADOR</h6>
      </Link>
    );
  }

  function HomeCatalog() {
    return (
      <Link className="select-home-link" to="/catalog">
        <i className="fas fa-store fa-6x icon-circle-border"></i>
        <h6 className="text-muted mt-5">CATÁLOGO</h6>
      </Link>
    );
  }

  return (
    <div className="select-home text-center">
      <h4 className="mt-5 mb-5 select-home-title">
        SELECCIONA EL TIPO DE USUARIO
      </h4>
      <div className="mt-5 d-flex justify-content-center p-5">
        <div className="container d-flex justify-content-around w-100">
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
