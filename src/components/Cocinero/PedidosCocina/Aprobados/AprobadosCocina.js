import React from "react";
import AprobadosCard from "./AprobadosCard";
import { updateEstado } from "../../../../API/ApiPedidos";
import { Button } from "reactstrap";

export default function AprobadosCocina({ pedidosAprobados, toggleReload }) {
  async function comenzarPedido(id) {
    await updateEstado("comenzar", id);
    toggleReload();
  }
  return (
    <div className="col-6 border-right">
      <div className="row">
        {pedidosAprobados.map((pedido, index) => (
          <div key={index} className="col-6">
            <AprobadosCard pedido={pedido}>
              <Button
                className="w-100 border-0 mt-3"
                style={{ background: "#7ddc1f" }}
                onClick={() => comenzarPedido(pedido._id)}
              >
                Comenzar
              </Button>
            </AprobadosCard>
          </div>
        ))}
      </div>
    </div>
  );
}
