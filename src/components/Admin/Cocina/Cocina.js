import React, { useState } from "react";
import Insumos from "./Insumos/Insumos";
import Ingredientes from "../../Cocinero/AdministrarCocina/Ingredientes/Ingredientes";
import ArtReventa from "./ArtReventa/ArtReventa";
import Categorias from "./Categorias/Categorias";
import Platos from "../../Cocinero/AdministrarCocina/Platos/Platos";

const Cocina = () => {
  const [enable, setEnable] = useState(4);

  const toggle = (number) => {
    setEnable(number);
  };
  return (
    <div>
      {/** Nav Administrar Cocina */}
      <div className="d-flex justify-content-center pb-2 pt-2 border-top bg-secondary">
        <div className="d-flex justify-content-around w-50">
          <button className="btn btn-nav" onClick={() => toggle(0)}>
            Insumos
          </button>
          <button className="btn btn-nav" onClick={() => toggle(1)}>
            Ingredientes
          </button>
          <button className="btn btn-nav" onClick={() => toggle(2)}>
            Platos
          </button>
          <button className="btn btn-nav" onClick={() => toggle(3)}>
            Categorías
          </button>
          <button className="btn btn-nav" onClick={() => toggle(4)}>
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
            <Ingredientes />
          </div>
        )}
        {enable === 2 && (
          <div>
            <Platos />
          </div>
        )}
        {enable === 3 && (
          <div>
            <Categorias />
          </div>
        )}
        {enable === 4 && (
          <div>
            <ArtReventa />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cocina;
