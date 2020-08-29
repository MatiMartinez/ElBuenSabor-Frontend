import React from "react";
import SidebarReportes from "./SidebarReportes";
import PrivateRoute from "../../../routes/PrivateRoute";
import StockReporte from "./TablasReportes/StockReportes/StockReporte";
import RecaudacionesReporte from "./TablasReportes/RecaudacionesReporte";
import RankingReporte from "./TablasReportes/RankingReportes/RankingReporte";
import PedidosReporte from "./TablasReportes/PedidosReportes/PedidosReporte";

export default function Reportes() {
  return (
    <div className="p-4">
      <div className="row">
        <SidebarReportes />
        <div className="col-10">
          <PrivateRoute
            path="/admin/reportes/stock"
            component={StockReporte}
            rol=""
          />
          <PrivateRoute
            path="/admin/reportes/recaudaciones"
            component={RecaudacionesReporte}
            rol=""
          />
          <PrivateRoute
            path="/admin/reportes/ranking"
            component={RankingReporte}
            rol=""
          />
          <PrivateRoute
            path="/admin/reportes/pedidos"
            component={PedidosReporte}
            rol=""
          />
        </div>
      </div>
    </div>
  );
}
