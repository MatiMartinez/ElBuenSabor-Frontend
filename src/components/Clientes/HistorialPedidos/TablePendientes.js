import React from "react";
import { Table } from "reactstrap";
import PopoverDetalle from "../../Cajero/PedidosCaja/PedidosEstado/PopoverDetalle";

export default function TablePendientes({ pedidos }) {
  return (
    <div className="col-12 col-sm-6 table-border-right mb-4">
      <h4 className="text-danger mb-3">Pendientes</h4>
      <Table responsive bordered className="div-shadow">
        <thead className="bg-light">
          <tr>
            <th>Número</th>
            <th>Pago</th>
            <th>Demora</th>
            <th>Envío</th>
            <th>Detalle</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr key={index}>
              <td>{pedido.numero}</td>
              <td>{pedido.formaPago}</td>
              <td>{pedido.minutosDemora}</td>
              <td>{pedido.delivery === true ? "Delivery" : "Retiro local"}</td>
              <PopoverDetalle>
                {pedido.detalle.platos.map((plato, index) => (
                  <p key={index}>
                    {plato.cantidad +
                      " " +
                      plato.item_id.denominacion +
                      " " +
                      "$ " +
                      plato.item_id.precioVenta}
                  </p>
                ))}
                {pedido.detalle.reventas.map((reventa, index) => (
                  <p key={index}>
                    {reventa.cantidad +
                      " " +
                      reventa.item_id.denominacion +
                      " " +
                      "$ " +
                      reventa.item_id.precioVenta}
                  </p>
                ))}
              </PopoverDetalle>
              <td>{pedido.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
