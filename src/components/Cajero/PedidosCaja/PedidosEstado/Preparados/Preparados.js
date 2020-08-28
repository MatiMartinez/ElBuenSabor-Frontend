import React from "react";
import PopoverDetalle from "../PopoverDetalle";
import OpcionesPreparados from "./OpcionesPreparados";

export default function Preparados({ pedidosPreparados, toggleReload }) {
  return (
    <div className="d-flex flex-column">
      <div className="text-muted">
        <i className="fas fa-check-double mr-2"></i>
        Preparados
      </div>
      <div className="w-100">
        {pedidosPreparados.length !== 0 ? (
          <table className="table div-shadow mt-3">
            <thead>
              <tr className="thead-light">
                <th>Numero</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Detalle</th>
                <th>Envio</th>
                <th>Total</th>
                <th>Demora</th>
                <th className="text-center">
                  <i className="fas fa-cog"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {pedidosPreparados.map((pedido, index) => (
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
                  <td>{pedido.minutosDemora.toFixed(2)}</td>
                  <td className="text-center">
                    <OpcionesPreparados
                      id={pedido._id}
                      toggleReload={toggleReload}
                      delivery={pedido.delivery}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="container text-center text-muted mt-3 mb-3">
            <h3>No hay pedidos preparados actualmente</h3>
          </div>
        )}
      </div>
    </div>
  );
}
