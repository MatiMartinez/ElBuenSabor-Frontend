import React from "react";
import { Table } from "reactstrap";
import PopoverDetalle from "../../Cajero/PedidosCaja/PedidosEstado/PopoverDetalle";

export default function TableEntregados({ pedidos }) {
  return (
    <div className="col-12 col-sm-12">
      <Table responsive bordered className="div-shadow">
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
              <td>{pedido.minutosDemora}</td>
              <td>{pedido.estado}</td>
              <td>{pedido.delivery === true ? "Delivery" : "Retiro local"}</td>
              <td>{pedido.total}</td>
              <td>

                <PopoverDetalle identif={index} >
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
              </td>

              <td>
                {pedido.factura !== null ? (
                  <a
                    className="btn btn-info"
                    href={`http://localhost:3033/api/pedidos/factura/${pedido._id}`}
                  >
                    <i className="fas fa-file-invoice" />
                  </a>
                ) : (
                  <a className="btn btn-info disabled" aria-disabled="true" href="#">
                    <i className="fas fa-file-invoice" />
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
