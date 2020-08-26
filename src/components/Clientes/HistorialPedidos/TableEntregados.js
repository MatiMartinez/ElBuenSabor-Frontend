import React from "react";
import { Table } from "reactstrap";

export default function TableEntregados({ pedidos }) {
  return (
    <div className="col-12 col-sm-6">
      <h4 className="text-danger mb-3">Entregados</h4>
      <Table responsive bordered className="div-shadow">
        <thead>
          <tr>
            <th>Número</th>
            <th>Pago</th>
            <th>Demora</th>
            <th>Envío</th>
            <th>Total</th>
            <th>Factura</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr key={index}>
              <td>{pedido.numero}</td>
              <td>{pedido.formaPago}</td>
              <td>{pedido.minutosDemora}</td>
              <td>{pedido.delivery === true ? "Delivery" : "Retiro local"}</td>
              <td>{pedido.total}</td>
              <td>
                <a
                  className="btn btn-info"
                  href={`http://localhost:3033/api/pedidos/factura/${pedido._id}`}
                >
                  <i className="fas fa-file-invoice" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
