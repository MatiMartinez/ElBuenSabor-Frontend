import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { getPedidosPorCliente } from "../../../../../API/ApiReportes";
import OpcionesPedidosReporte from "./OpcionesPedidosReporte";

export default function PedidosReporte() {
  const [pedidos, setPedidos] = useState([]);
  const [fecha_desde, setFecha_desde] = useState("2020-08-01");
  const [fecha_hasta, setFecha_hasta] = useState("2020-08-23");

  async function onSubmit() {
    const data = await getPedidosPorCliente({ fecha_desde, fecha_hasta });
    setPedidos(data);
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-muted">Pedidos</div>
        <div>
          <a
            className="btn btn-info mb-1"
            href={`http://localhost:3033/api/reportes/descargar/pedidos-cliente?fecha_desde=${fecha_desde}&fecha_hasta=${fecha_hasta}`}
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
      {pedidos.length !== 0 && (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Pedidos Realizados</th>
                <th>Pedidos Entregados</th>
                <th className="text-center">
                  <i className="fas fa-cog"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido, index) => (
                <tr key="index">
                  <td>{pedido.nombre}</td>
                  <td>{pedido.email}</td>
                  <td>{pedido.pedidosRealizados}</td>
                  <td>{pedido.pedidosEntregados}</td>
                  <td className="text-center">
                    <OpcionesPedidosReporte userId={pedido.usuarioId} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
