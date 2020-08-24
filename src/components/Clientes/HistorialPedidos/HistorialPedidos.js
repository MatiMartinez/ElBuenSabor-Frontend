import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import "./HistorialPedidos.css";
import { getPedidosUsuario } from "../../../API/ApiPedidos";
import { useAuth0 } from "../../../react-auth0-spa";

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
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Estado</th>
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
                    <td>
                      {pedido.estado.charAt(0).toUpperCase() +
                        pedido.estado.slice(1)}
                    </td>
                    <td>{pedido.formaPago}</td>
                    <td>
                      {pedido.estado === "pendiente"
                        ? pedido.minutosDemora
                        : "-"}
                    </td>
                    <td>
                      {pedido.delivery === true ? "Delivery" : "Retiro local"}
                    </td>
                    <td>{pedido.total}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
