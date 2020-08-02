import React from "react";

import "./SelectHome.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";

export default function SelectHome() {
  const { userdb } = useAuth0();

  function HomeCocinero() {
    return (
      <Link className="icon-container p-4 m-4" to="/cocina">
        <i className="fas fa-utensils fa-8x"></i>
      </Link>
    );
  }

  /*function HomeCajero() {
    return (
      <Link className="icon-container p-4 m-4" to="/caja">
        <i className="fas fa-cash-register fa-8x"></i>
      </Link>
    );
  }*/

  function HomeAdmin() {
    return (
      <Link className="icon-container p-4 m-4" to="/admin">
        <i className="fas fa-user-cog fa-8x"></i>
      </Link>
    );
  }

  function HomeCatalog() {
    return (
      <Link className="icon-container p-4 m-4" to="/catalog">
        <i className="fas fa-store fa-8x"></i>
      </Link>
    );
  }

  return (
    <div className="mt-5 d-flex justify-content-center select-home mb-5">
      <div className="d-flex justify-content-center home-container p-4">
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
            return <HomeCocinero key={index} />;
          }
          return null;
        })}
        <HomeCatalog />
      </div>
    </div>
  );
}
