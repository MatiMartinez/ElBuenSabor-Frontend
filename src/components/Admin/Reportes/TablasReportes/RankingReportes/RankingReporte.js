import React, { useState } from "react";
import { getRankingPlatos } from "../../../../../API/ApiReportes";
import { TextField } from "@material-ui/core";

export default function RankingReporte() {
  const [platos, setPlatos] = useState([]);
  const [fecha_desde, setFecha_desde] = useState("");
  const [fecha_hasta, setFecha_hasta] = useState("");

  async function onSubmit() {
    const data = await getRankingPlatos({ fecha_desde, fecha_hasta });
    setPlatos(data);
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-muted">Ranking</div>
        <div>
          <a
            className="btn btn-info mb-1"
            href={`http://localhost:3033/api/reportes/descargar/ranking?fecha_desde=${fecha_desde}&fecha_hasta=${fecha_hasta}`}
          >
            <i className="fas fa-file-download mr-2"></i>
            Excel
          </a>
        </div>
      </div>
      <hr className="w-100" />
      <div className="d-flex justify-content-end mb-3">
        <TextField
          name="fecha_desde"
          id="date"
          label="Desde"
          type="date"
          value={fecha_desde}
          onChange={(e) => setFecha_desde(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          className="ml-2 mr-2"
        />
        <TextField
          name="fecha_hasta"
          id="date"
          label="Hasta"
          type="date"
          value={fecha_hasta}
          onChange={(e) => setFecha_hasta(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          className="ml-2 mr-2"
        />
        <button
          className="btn btn-danger mt-2 mr-2 ml-2"
          type="button"
          onClick={() => onSubmit()}
        >
          Buscar
        </button>
      </div>
      {platos.length !== 0 ? (
        <div>
          <table className="table div-shadow mt-3">
            <thead className="thead-light">
              <tr>
                <th>Plato</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {platos.map((plato, index) => (
                <tr key={index}>
                  <td>{plato.plato}</td>
                  <td>{plato.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
