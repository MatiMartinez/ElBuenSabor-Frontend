import React from "react";

export default function NavAdmin({ changeToggle, toggle }) {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="d-flex justify-content-center w-100">
        <button
          className="btn btn-nav btn-lg"
          onClick={() => changeToggle(0)}
          disabled={toggle === 0 ? true : false}
        >
          Cocina
        </button>
        <button
          className="btn btn-nav btn-lg"
          onClick={() => changeToggle(1)}
          disabled={toggle === 1 ? true : false}
        >
          Empleados
        </button>
        <button
          className="btn btn-nav btn-lg"
          onClick={() => changeToggle(2)}
          disabled={toggle === 2 ? true : false}
        >
          Estadísticas
        </button>
      </div>
    </div>
  );
}
