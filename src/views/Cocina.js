import React from "react";

import PedidosCocina from "../components/Cocinero/PedidosCocina/PedidosCocina";
import NavCocina from "./Cocina/NavCocina";
import PrivateRoute from "../routes/PrivateRoute";
import Platos from "../components/Cocinero/AdministrarCocina/Platos/Platos";
import Categorias from "../components/Admin/Cocina/Categorias/Categorias";

const Cocina = () => {
  return (
    <div className="cocina-view">
      <NavCocina />
      <div className="m-4">
        <PrivateRoute
          path="/cocina/pedidos"
          component={PedidosCocina}
          rol="Cocinero"
        />
        <PrivateRoute path="/cocina/platos" component={Platos} rol="Cocinero" />
        <PrivateRoute
          path="/cocina/categorias"
          component={Categorias}
          rol="Cocinero"
        />
      </div>
    </div>
  );
};

export default Cocina;
