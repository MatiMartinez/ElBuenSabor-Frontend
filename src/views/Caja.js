import React, { useState } from "react";

import PedidosCaja from "../components/Cajero/PedidosCaja/PedidosCaja";

const Caja = () => {
  const [toogle, setToogle] = useState(true);

  const changeToogle = () => {
    setToogle(!toogle);
  };
  return (
    <div className="caja-view">
      {/** Nav Cajero */}
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
            Administrar Caja
          </button>
        </div>
      </div>
      {/** Content Cocina */}
      {toogle && <PedidosCaja />}
      {!toogle && <div>AdministrarCaja</div>}
    </div>
  );
};

export default Caja;
