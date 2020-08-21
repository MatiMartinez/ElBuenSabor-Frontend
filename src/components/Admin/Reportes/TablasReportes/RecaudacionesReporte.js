import React from "react";

export default function RecaudacionesReporte() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-muted">Recaudaciones</div>
        <div>
          <a
            className="btn btn-info mb-1"
            href="http://localhost:3033/api/reportes/descargar/recaudaciones"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-download mr-2"></i>
            Excel
          </a>
        </div>
      </div>
      <div className="w-100"></div>
    </div>
  );
}
