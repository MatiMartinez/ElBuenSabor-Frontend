import React from "react";
import { Link } from "react-router-dom";

export default function SidebarPedidos(props) {
  return (
    <div className="col-2 mt-2 d-flex flex-column">
      <h4 className="text-info mb-4">Pedidos</h4>
      <hr className="w-100" />
      <Link to="/caja/pendientes" className="caja-links">
        <i className="fas fa-question mr-2 fa-sm"></i>
        Pendientes
        <p className="float-right m-0 mr-2">({props.cantPedidosPendientes})</p>
      </Link>
      <hr className="w-100" />
      <Link to="/caja/aprobados" className="caja-links">
        <i className="fas fa-check mr-2 fa-sm"></i>
        Aprobados
        <p className="float-right m-0 mr-2">({props.cantPedidosAprobados})</p>
      </Link>
      <hr className="w-100" />
      <Link to="/caja/cancelados" className="caja-links">
        <i className="fas fa-times mr-2 fa-sm"></i>
        Cancelados
        <p className="float-right m-0 mr-2">({props.cantPedidosCancelados})</p>
      </Link>
      <hr className="w-100" />
      <Link to="/caja/en-proceso" className="caja-links">
        <i className="fas fa-hamburger mr-2 fa-sm"></i>
        En Proceso
        <p className="float-right m-0 mr-2">({props.cantPedidosEnProceso})</p>
      </Link>
      <hr className="w-100" />
      <Link to="/caja/preparados" className="caja-links">
        <i className="fas fa-check-double mr-2 fa-sm"></i>
        Preparados
        <p className="float-right m-0 mr-2">({props.cantPedidosPreparados})</p>
      </Link>
      <hr className="w-100" />
      <Link to="/caja/en-delivery" className="caja-links">
        <i className="fas fa-bicycle mr-2 fa-sm"></i>
        En Delivery
        <p className="float-right m-0 mr-2">({props.cantPedidosEnDelivery})</p>
      </Link>
      <hr className="w-100" />
      <Link to="/caja/entregados" className="caja-links">
        <i className="far fa-handshake mr-2 fa-sm"></i>
        Entregados
        <p className="float-right m-0 mr-2">({props.cantPedidosEntregados})</p>
      </Link>
      <hr className="w-100" />
    </div>
  );
}
