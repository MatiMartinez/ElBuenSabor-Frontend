import React from "react";

export default function NavAdmin({ changeToggle }) {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="d-flex justify-content-center w-100">
        <button className="btn btn-nav btn-lg" onClick={() => changeToggle(0)}>
          Cocina
        </button>
        <button className="btn btn-nav btn-lg" onClick={() => changeToggle(1)}>
          Empleados
        </button>
        <button className="btn btn-nav btn-lg" onClick={() => changeToggle(2)}>
          Estadísticas
        </button>
      </div>
    </div>
  );
}
