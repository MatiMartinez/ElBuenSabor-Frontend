import React, { useState } from "react";

import "./AdministrarCocina.css";

import Categorias from "../../Admin/Cocina/Categorias/Categorias";
import Platos from "./Platos/Platos";

const AdministrarCocina = () => {
  const [enable, setEnable] = useState(true);

  const toogle = () => {
    setEnable(!enable);
  };

  return (
    <div>
      {/** Nav Administrar Cocina */}
      <div className="d-flex justify-content-center pb-2 pt-2 border-top bg-secondary">
        <div className="d-flex justify-content-around w-50">
          <button
            className="btn btn-nav"
            disabled={enable}
            onClick={() => toogle()}
          >
            Platos
          </button>
          <button
            className="btn btn-nav"
            disabled={!enable}
            onClick={() => toogle()}
          >
            Categorías
          </button>
        </div>
      </div>
      {/** Content de administracion cocina */}
      <div className="m-4">{enable === true ? <Platos /> : <Categorias />}</div>
    </div>
  );
};

export default AdministrarCocina;
