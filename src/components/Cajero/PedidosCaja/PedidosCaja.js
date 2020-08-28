import React, { useState, useEffect } from "react";
import Pendientes from "./PedidosEstado/Pendientes/Pendientes";
import Aprobados from "./PedidosEstado/Aprobados/Aprobados";
import Cancelados from "./PedidosEstado/Cancelados/Cancelados";
import PrivateRoute from "../../../routes/PrivateRoute";

import SidebarPedidos from "./PedidosEstado/SidebarPedidos";
import { getPedidosByEstado } from "../../../API/ApiPedidos";
import EnProceso from "./PedidosEstado/EnProceso/EnProceso";
import Preparados from "./PedidosEstado/Preparados/Preparados";
import EnDelivery from "./PedidosEstado/EnDelivery/EnDelivery";
import Entregados from "./PedidosEstado/Entregados/Entregados";

export default function PedidosCaja() {
  const [pedidosPendientes, setPedidosPendientes] = useState([]);
  const [pedidosAprobados, setPedidosAprobados] = useState([]);
  const [pedidosCancelados, setPedidosCancelados] = useState([]);
  const [pedidosEnProceso, setPedidosEnProceso] = useState([]);
  const [pedidosPreparados, setPedidosPreparados] = useState([]);
  const [pedidosEnDelivery, setPedidosEnDelivery] = useState([]);
  const [pedidosEntregados, setPedidosEntregados] = useState([]);

  // re-render
  const [reload, setReload] = useState(true);

  function toggleReload() {
    setReload(!reload);
  }

  useEffect(() => {
    async function cargarPedidosPendientes() {
      const data = await getPedidosByEstado("pendientes");
      setPedidosPendientes(data);
    }
    async function cargarPedidosAprobados() {
      const data = await getPedidosByEstado("aprobados");
      setPedidosAprobados(data);
    }
    async function cargarPedidosCancelados() {
      const data = await getPedidosByEstado("cancelados");
      setPedidosCancelados(data);
    }
    async function cargarPedidosEnProceso() {
      const data = await getPedidosByEstado("en-proceso");
      setPedidosEnProceso(data);
    }
    async function cargarPedidosPreparados() {
      const data = await getPedidosByEstado("preparados");
      setPedidosPreparados(data);
    }
    async function cargarPedidosEnDelivery() {
      const data = await getPedidosByEstado("en-delivery");
      setPedidosEnDelivery(data);
    }
    async function cargarPedidosEntregados() {
      const data = await getPedidosByEstado("entregados");
      setPedidosEntregados(data);
    }
    if (reload === true) {
      cargarPedidosCancelados();
      cargarPedidosPendientes();
      cargarPedidosAprobados();
      cargarPedidosEnProceso();
      cargarPedidosPreparados();
      cargarPedidosEnDelivery();
      cargarPedidosEntregados();
      toggleReload();
    }
    // eslint-disable-next-line
  }, [reload]);

  return (
    <div className="p-4 row">
      {/** Sidebar de pedidos */}
      <SidebarPedidos
        cantPedidosPendientes={pedidosPendientes.length}
        cantPedidosAprobados={pedidosAprobados.length}
        cantPedidosCancelados={pedidosCancelados.length}
        cantPedidosEnProceso={pedidosEnProceso.length}
        cantPedidosPreparados={pedidosPreparados.length}
        cantPedidosEnDelivery={pedidosEnDelivery.length}
        cantPedidosEntregados={pedidosEntregados.length}
        toggleReload={toggleReload}
      />
      {/** Tabla con pedidos */}
      <div className="col-10 mt-2">
        <PrivateRoute
          path="/caja/pendientes"
          component={Pendientes}
          rol="Cajero"
        >
          <Pendientes
            pedidosPendientes={pedidosPendientes}
            toggleReload={toggleReload}
          />
        </PrivateRoute>
        <PrivateRoute path="/caja/aprobados" component={Aprobados} rol="Cajero">
          <Aprobados
            pedidosAprobados={pedidosAprobados}
            toggleReload={toggleReload}
          />
        </PrivateRoute>
        <PrivateRoute
          path="/caja/cancelados"
          component={Cancelados}
          rol="Cajero"
        >
          <Cancelados pedidosCancelados={pedidosCancelados} />
        </PrivateRoute>
        <PrivateRoute
          path="/caja/en-proceso"
          component={EnProceso}
          rol="Cajero"
        >
          <EnProceso
            pedidosEnProceso={pedidosEnProceso}
            component={EnProceso}
          />
        </PrivateRoute>
        <PrivateRoute
          path="/caja/preparados"
          component={Preparados}
          rol="Cajero"
        >
          <Preparados
            pedidosPreparados={pedidosPreparados}
            toggleReload={toggleReload}
          />
        </PrivateRoute>
        <PrivateRoute
          path="/caja/en-delivery"
          component={EnDelivery}
          rol="Cajero"
        >
          <EnDelivery
            pedidosEnDelivery={pedidosEnDelivery}
            toggleReload={toggleReload}
          />
        </PrivateRoute>
        <PrivateRoute
          path="/caja/entregados"
          component={Entregados}
          rol="Cajero"
        >
          <Entregados pedidosEntregados={pedidosEntregados} />
        </PrivateRoute>
      </div>
    </div>
  );
}
