import React from "react";
import PopoverDetalle from "../PopoverDetalle";
import OpcionesPendientes from "./OpcionesPendientes";

export default function Pendientes({ pedidosPendientes, toggleReload }) {
  return (
    <div className="d-flex flex-column">
      <div className="text-muted">
        <i className="fas fa-question mr-2"></i>
        Pendientes
      </div>
      <div className="w-100">
        {pedidosPendientes.length !== 0 ? (
          <table className="table div-shadow mt-3">
            <thead>
              <tr className="thead-light">
                <th>Numero</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Detalle</th>
                <th>Envio</th>
                <th>Total</th>
                <th className="text-center">
                  <i className="fas fa-cog"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {pedidosPendientes.map((pedido, index) => (
                <tr key={index}>
                  <td>{pedido.numero}</td>
                  <td>{pedido.fecha}</td>
                  <td>{pedido.usuario.email}</td>
                  <PopoverDetalle index={index}>
                    {pedido.detalle.platos.map((plato, index) => (
                      <p key={index}>
                        {plato.cantidad + " " + plato.item_id.denominacion}
                      </p>
                    ))}
                    {pedido.detalle.reventas.map((reventa, index) => (
                      <p key={index}>
                        {reventa.cantidad + " " + reventa.item_id.denominacion}
                      </p>
                    ))}
                  </PopoverDetalle>
                  <td>{pedido.delivery === true ? "Delivery" : "Local"}</td>
                  <td>$ {pedido.total}</td>
                  <td className="text-center">
                    <OpcionesPendientes
                      id={pedido._id}
                      toggleReload={toggleReload}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="container text-center text-muted mt-3 mb-3">
            <h3>No hay pedidos pendientes actualmente</h3>
          </div>
        )}
      </div>
    </div>
  );
}
