import React from "react";
import { Link } from "react-router-dom";

export default function SidebarReportes() {
  return (
    <div className="col-2 mt-2 d-flex flex-column">
      <h4 className="text-info mb-4">Reportes</h4>
      <hr className="w-100" />
      <Link to="/admin/reportes/stock" className="caja-links">
        Stock
      </Link>
      <hr className="w-100" />
      <Link to="/admin/reportes/recaudaciones" className="caja-links">
        Recaudaciones
      </Link>
      <hr className="w-100" />
      <Link to="/admin/reportes/ranking" className="caja-links">
        Ranking
      </Link>
      <hr className="w-100" />
      <Link to="/admin/reportes/pedidos" className="caja-links">
        Pedidos
      </Link>
      <hr className="w-100" />
    </div>
  );
}
