import React from "react";

import "./Buscador.css";

const Buscador = ({ onChange }) => {
  return (
    <div className="d-flex">
      <input
        className="form-control search-content"
        type="text"
        required
        name="buscador"
        onChange={onChange}
        placeholder="Buscar productos..."
      />
      <button className="btn btn-search" type="submit">
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
