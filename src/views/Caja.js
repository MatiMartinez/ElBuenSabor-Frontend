import React, { useState } from 'react';

import PedidosCaja from '../components/Cajero/PedidosCaja';

const Caja = () => {
  const [toogle, setToogle] = useState(false);
  const [enable, setEnable] = useState(true);

  const changeToogle = () => {
    setToogle(!toogle);
    setEnable(!enable);
  };
  return (
    <div>
      {/** Nav Cajero */}
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex justify-content-center w-50">
          <button
            className="btn btn-nav btn-lg"
            onClick={changeToogle}
            disabled={!enable}
          >
            Pedidos
          </button>
          <button
            className="btn btn-nav btn-lg"
            onClick={changeToogle}
            disabled={enable}
          >
            Administrar Caja
          </button>
        </div>
      </div>
      {/** Content Cocina */}
      {toogle && <PedidosCaja />}
      {}
    </div>
  );
};

export default Caja;
