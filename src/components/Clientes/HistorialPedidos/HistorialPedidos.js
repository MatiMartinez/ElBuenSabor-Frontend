import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import "./HistorialPedidos.css";
import { getPedidosUsuario } from "../../../API/ApiPedidos";
import { useAuth0 } from "../../../react-auth0-spa";
import { Table } from "reactstrap";
import PopoverDetalle from "../../Cajero/PedidosCaja/PedidosEstado/PopoverDetalle";
import TableEntregados from "./TableEntregados";
import TablePendientes from "./TablePendientes";

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
            <TablePendientes pedidos={pedidos} />
            {/** Tabla de pedidos entregados */}
            <TableEntregados pedidos={pedidos} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
