import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import "./HistorialPedidos.css";
import { getPedidosUsuario } from "../../../API/ApiPedidos";
import { useAuth0 } from "../../../react-auth0-spa";
import { Table } from "reactstrap";
import PopoverDetalle from "../../Cajero/PedidosCaja/PedidosEstado/PopoverDetalle";

export default function HistorialPedidos() {
  const { userdb } = useAuth0();

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function getPedidos() {
      const data = await getPedidosUsuario(userdb._id);
      setPedidos(data);
    }
    getPedidos();
  }, []); // eslint-disable-line

  return (
    <div className="historial-pedidos-view">
      <div className="m-4">
        <div className="d-flex align-items-center mb-4">
          <FontAwesomeIcon icon={faFileAlt} className="mr-3 fa-2x" />
          <h3 className="m-0">Mis pedidos</h3>
        </div>
        {pedidos.length !== 0 ? (
          <div className="row">
            {/** Tabla de pedidos pendientes */}
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
                      <td>
                        {pedido.delivery === true ? "Delivery" : "Retiro local"}
                      </td>
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
            {/** Tabla de pedidos entregados */}
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
                      <td>
                        {pedido.delivery === true ? "Delivery" : "Retiro local"}
                      </td>
                      <td>{pedido.total}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
