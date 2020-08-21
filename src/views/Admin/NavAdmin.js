import React from "react";
import { Link } from "react-router-dom";

export default function NavAdmin() {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="d-flex justify-content-center w-100">
        <Link className="btn btn-nav btn-lg" to="/admin/cocina">
          Cocina
        </Link>
        <Link className="btn btn-nav btn-lg" to="/admin/empleados">
          Empleados
        </Link>
        <Link className="btn btn-nav btn-lg" to="/admin/reportes">
          Reportes
        </Link>
      </div>
    </div>
  );
}
