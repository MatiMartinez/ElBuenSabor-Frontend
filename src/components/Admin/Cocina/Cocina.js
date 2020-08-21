import React from "react";
import Insumos from "./Insumos/Insumos";
import ArtReventa from "./ArtReventa/ArtReventa";
import Categorias from "./Categorias/Categorias";
import Platos from "../../Cocinero/AdministrarCocina/Platos/Platos";
import PrivateRoute from "../../../routes/PrivateRoute";
import { Link } from "react-router-dom";

const Cocina = () => {
  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div>
      {/** Nav Administrar Cocina */}
      <div className="d-flex justify-content-center border-top bg-secondary">
        <div className="d-flex justify-content-center w-100">
          <Link className="btn btn-nav" to="/admin/cocina/insumos">
            Insumos
          </Link>
          <Link className="btn btn-nav" to="/admin/cocina/platos">
            Platos
          </Link>
          <Link className="btn btn-nav" to="/admin/cocina/categorias">
            Categorías
          </Link>
          <Link className="btn btn-nav" to="/admin/cocina/articulos-reventa">
            Art. Reventa
          </Link>
        </div>
      </div>
      {/** Content de administracion cocina */}
      <div className="m-4">
        <PrivateRoute path="/admin/cocina/insumos" component={Insumos} />
        <PrivateRoute path="/admin/cocina/platos" component={Platos} />
        <PrivateRoute path="/admin/cocina/categorias" component={Categorias} />
        <PrivateRoute
          path="/admin/cocina/articulos-reventa"
          component={ArtReventa}
        />
      </div>
    </div>
  );
};

export default Cocina;
