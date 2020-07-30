import React from "react";
import { setBorradoPlato } from "../../../../../API/ApiPlatos";

import "./PlatoCard.css";

export default function PlatoCard({ plato, toggle }) {
  // Metodos de platos
  async function borrarPlato(id) {
    await setBorradoPlato(id);
    window.location.reload(true);
  }

  return (
    <div className="card">
      <img className="card-img-top" src={plato.imagenPath} alt="img-plato" />
      <div className="card-body">
        <h5 className="card-title">{plato.denominacion}</h5>
        <p className="card-text">En cocina: {plato.tiempoCocina} min</p>
        <p className="card-text">Precio: $ {plato.precioVenta}</p>
        <p className="card-text">Categoria: {plato.rubro.denominacion}</p>
        <div className="mt-3">
          <button className="btn" onClick={() => toggle(plato)}>
            <i className="far fa-edit"></i>
          </button>
          <button className="btn" onClick={() => borrarPlato(plato._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
