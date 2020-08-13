import React, { useState, useEffect } from "react";
import { getPedidosByEstado } from "../../../API/ApiPedidos";
import AprobadosCocina from "./Aprobados/AprobadosCocina";
import EnProcesoCocina from "./EnProceso/EnProcesoCocina";

const PedidosCocina = () => {
  const [pedidosAprobados, setPedidosAprobados] = useState([]);
  const [pedidosEnProceso, setPedidosEnProceso] = useState([]);

  // re-render
  const [reload, setReload] = useState(true);

  function toggleReload() {
    setReload(!reload);
  }

  useEffect(() => {
    async function cargarPedidosAprobados() {
      const data = await getPedidosByEstado("aprobados");
      setPedidosAprobados(data);
    }
    async function cargarPedidosEnProceso() {
      const data = await getPedidosByEstado("en-proceso");
      setPedidosEnProceso(data);
    }
    if (reload === true) {
      cargarPedidosAprobados();
      cargarPedidosEnProceso();
      toggleReload();
    }
    // eslint-disable-next-line
  }, [reload]);

  return (
    <div className="border-top p-4">
      <div className="d-flex justify-content-between mb-4">
        <h4 className="">Órdenes</h4>
        <button className="btn btn-info" onClick={() => toggleReload()}>
          <i className="fas fa-redo mr-2"></i>Actualizar
        </button>
      </div>
      <div className="row">
        <AprobadosCocina
          pedidosAprobados={pedidosAprobados}
          toggleReload={toggleReload}
        />
        <EnProcesoCocina
          pedidosEnProceso={pedidosEnProceso}
          toggleReload={toggleReload}
        />
      </div>
    </div>
  );
};

export default PedidosCocina;
