import React, { useState } from "react";

import PedidosCocina from "../components/Cocinero/PedidosCocina";
import AdministrarCocina from "../components/Cocinero/AdministrarCocina/AdministrarCocina";

const Cocina = () => {
  const [toogle, setToogle] = useState(false);

  const changeToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div>
      {/** Nav Cocinero */}
      <div className="d-flex justify-content-center pt-2 pb-2 bg-dark">
        <div className="d-flex justify-content-center w-50">
          <button
            className="btn btn-nav btn-lg"
            onClick={changeToogle}
            disabled={toogle}
          >
            Pedidos
          </button>
          <button
            className="btn btn-nav btn-lg"
            onClick={changeToogle}
            disabled={!toogle}
          >
            Administrar Cocina
          </button>
        </div>
      </div>
      {/** Content Cocina */}
      {toogle && <PedidosCocina />}
      {!toogle && <AdministrarCocina />}
    </div>
  );
};

export default Cocina;
