import React, { useState } from 'react';

import PedidosCocina from '../components/Cocinero/PedidosCocina';
import AdministrarCocina from '../components/Cocinero/AdministrarCocina';

const Cocina = () => {
  const [toogle, setToogle] = useState(false);
  const [enable, setEnable] = useState(true);

  const changeToogle = () => {
    setToogle(!toogle);
    setEnable(!enable);
  };

  return (
    <div className="">
      {/** Nav Cocinero */}
      <div className="d-flex justify-content-center p-3">
        <div className="d-flex justify-content-around w-25">
          <button className="btn" onClick={changeToogle} disabled={!enable}>
            Pedidos
          </button>
          <button className="btn" onClick={changeToogle} disabled={enable}>
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
