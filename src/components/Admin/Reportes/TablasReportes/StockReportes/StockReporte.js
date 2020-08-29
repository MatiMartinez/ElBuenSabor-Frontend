import React, { useEffect, useState } from "react";
import { getArticulosParaComprar } from "../../../../../API/ApiReportes";

export default function StockReporte() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    async function getArticulos() {
      const data = await getArticulosParaComprar();
      setArticulos(data);
    }
    getArticulos();
  }, []);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-muted">Stock</div>
        <div>
          <a
            className="btn btn-info mb-1"
            href="http://localhost:3033/api/reportes/descargar/stock"
          >
            <i className="fas fa-file-download mr-2"></i>
            Excel
          </a>
        </div>
      </div>
      {articulos.length !== 0 ? (
        <table className="table div-shadow mt-3">
          <thead>
            <tr className="thead-light">
              <th>Denominación</th>
              <th>Tipo</th>
              <th>Stock Actual</th>
              <th>Stock Mínimo</th>
              <th>StockMaxímo</th>
              <th>Compra Maxíma</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map((articulo, index) => (
              <tr key={index}>
                <td>{articulo.denominacion}</td>
                <td>{articulo.tipo}</td>
                <th className="text-danger">{articulo.stockActual}</th>
                <td>{articulo.stockMinimo}</td>
                <td>{articulo.stockMaximo}</td>
                <td>{articulo.compraMax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="container text-center text-muted mt-3 mb-3">
          <h3>No hay artículos para comprar actualmente</h3>
        </div>
      )}
    </div>
  );
}
