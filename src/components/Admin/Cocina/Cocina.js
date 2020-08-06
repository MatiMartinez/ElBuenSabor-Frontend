import React, { useState } from "react";
import Insumos from "./Insumos/Insumos";
import ArtReventa from "./ArtReventa/ArtReventa";
import Categorias from "./Categorias/Categorias";
import Platos from "../../Cocinero/AdministrarCocina/Platos/Platos";

const Cocina = () => {
  const [enable, setEnable] = useState(0);

  const toggle = (number) => {
    setEnable(number);
  };

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div>
      {/** Nav Administrar Cocina */}
      <div className="d-flex justify-content-center border-top bg-secondary">
        <div className="d-flex justify-content-center w-100">
          <button
            className="btn btn-nav"
            onClick={() => toggle(0)}
            disabled={enable === 0 ? true : false}
          >
            Insumos
          </button>
          <button
            className="btn btn-nav"
            onClick={() => toggle(1)}
            disabled={enable === 1 ? true : false}
          >
            Platos
          </button>
          <button
            className="btn btn-nav"
            onClick={() => toggle(2)}
            disabled={enable === 2 ? true : false}
          >
            Categorías
          </button>
          <button
            className="btn btn-nav"
            onClick={() => toggle(3)}
            disabled={enable === 3 ? true : false}
          >
            Art. Reventa
          </button>
        </div>
      </div>
      {/** Content de administracion cocina */}
      <div className="m-4">
        {enable === 0 && (
          <div>
            <Insumos />
          </div>
        )}
        {enable === 1 && (
          <div>
            <Platos />
          </div>
        )}
        {enable === 2 && (
          <div>
            <Categorias />
          </div>
        )}
        {enable === 3 && (
          <div>
            <ArtReventa />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cocina;
