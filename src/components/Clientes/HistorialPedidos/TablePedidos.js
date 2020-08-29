import React from "react";
import { Table } from "reactstrap";
import PopoverDetalle from "../../Cajero/PedidosCaja/PedidosEstado/PopoverDetalle";

export default function TablePedidos({ pedidos }) {
  return (
    <Table responsive bordered className="div-shadow mt-3">
      <thead>
        <tr>
          <th>Número</th>
          <th>Pago</th>
          <th>Demora</th>
          <th>Estado</th>
          <th>Envío</th>
          <th>Total</th>
          <th>Detalle</th>
          <th>Factura</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((pedido, index) => (
          <tr key={index}>
            <td>{pedido.numero}</td>
            <td>{pedido.formaPago}</td>
            <td>{pedido.minutosDemora} min</td>
            <td>{pedido.estado}</td>
            <td>{pedido.delivery === true ? "Delivery" : "Retiro local"}</td>
            <td>$ {pedido.total}</td>
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
            <td>
              <button
                className="btn btn-info"
                onClick={() =>
                  (window.location.href = `http://localhost:3033/api/pedidos/factura/${pedido._id}`)
                }
                disabled={pedido.estado !== "entregado"}
              >
                <i className="fas fa-file-invoice" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
