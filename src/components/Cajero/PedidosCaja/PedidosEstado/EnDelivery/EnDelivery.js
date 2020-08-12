import React from "react";
import PopoverDetalle from "../PopoverDetalle";

export default function EnDelivery({ pedidosEnDelivery, toggleReload }) {
  return (
    <div className="d-flex flex-column">
      <div className="text-muted">
        <i className="fas fa-bicycle mr-2"></i>
        En Delivery
      </div>
      <div className="w-100">
        {pedidosEnDelivery.length !== 0 ? (
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
              </tr>
            </thead>
            <tbody>
              {pedidosEnDelivery.map((pedido, index) => (
                <tr key={index}>
                  <td>{pedido.numero}</td>
                  <td>{pedido.fecha}</td>
                  <td>{pedido.usuario.email}</td>
                  <PopoverDetalle>
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
                  <td>{pedido.minutosDemora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="container text-center text-muted mt-3 mb-3">
            <h3>No hay pedidos en delivery actualmente</h3>
          </div>
        )}
      </div>
    </div>
  );
}
