import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { getPedidosPorCliente } from "../../../../API/ApiReportes";

export default function PedidosReporte() {
  const [pedidos, setPedidos] = useState([]);
  const [fecha_desde, setFecha_desde] = useState(Date.now());
  const [fecha_hasta, setFecha_hasta] = useState(Date.now());

  useEffect(() => {
    console.log(pedidos);
  }, [pedidos]);

  async function onSubmit() {
    const date = { fecha_desde: fecha_desde, fecha_hasta: fecha_hasta };
    console.log(date);
    const data = await getPedidosPorCliente(date);
    setPedidos(data);
    console.log(data);
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-muted">Pedidos</div>
        <div>
          <button className="btn btn-info mb-1">Excel</button>
        </div>
      </div>
      <hr className="w-100" />
      <div className="d-flex justify-content-end">
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
      {pedidos.length !== 0 && <div>Render</div>}
    </div>
  );
}
