import React from "react";
import EnProcesoCard from "./EnProcesoCard";
import { updateEstado } from "../../../../API/ApiPedidos";
import { Button } from "reactstrap";

export default function EnProcesoCocina({ pedidosEnProceso, toggleReload }) {
  async function terminarPedido(id) {
    await updateEstado("terminar", id);
    toggleReload();
  }

  async function regresarPedido(id) {
    await updateEstado("aprobar", id);
    toggleReload();
  }
  return (
    <div className="col-6 border-left">
      <div className="row">
        {pedidosEnProceso.map((pedido, index) => (
          <div key={index} className="col-6">
            <EnProcesoCard pedido={pedido}>
              <Button
                className="w-100 border-0 mt-3 mr-1"
                style={{ background: "#7ddc1f" }}
                onClick={() => regresarPedido(pedido._id)}
              >
                Regresar
              </Button>
              <Button
                className="w-100 border-0 mt-3 ml-1"
                style={{ background: "#0073e5" }}
                onClick={() => terminarPedido(pedido._id)}
              >
                Terminar
              </Button>
            </EnProcesoCard>
          </div>
        ))}
      </div>
    </div>
  );
}
