import React, { useState } from 'react';
import Insumos from './AdministrarCocina/Insumos';
import Categorias from './AdministrarCocina/Categorias';

import './AdministrarCocina.css';

const AdministrarCocina = () => {
  const [enable, setEnable] = useState(4);

  const toogle = (number) => {
    setEnable(number);
  };

  return (
    <div>
      {/** Nav Administrar Cocina */}
      <div className="d-flex justify-content-center p-3">
        <div className="d-flex justify-content-around w-25">
          <button className="btn" onClick={() => toogle(0)}>
            Insumos
          </button>
          <button className="btn" onClick={() => toogle(1)}>
            Art. de reventa
          </button>
          <button className="btn" onClick={() => toogle(2)}>
            Manufacturados
          </button>
          <button className="btn" onClick={() => toogle(3)}>
            Platos
          </button>
          <button className="btn" onClick={() => toogle(4)}>
            Categorías
          </button>
        </div>
      </div>
      {/** Content de administracion cocina */}
      <div className="container">
        {enable === 0 && (
          <div>
            <Insumos />
          </div>
        )}
        {enable === 1 && <div>Art. de reventa</div>}
        {enable === 2 && <div>Manufacturados</div>}
        {enable === 3 && <div>Platos</div>}
        {enable === 4 && (
          <div>
            <Categorias />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdministrarCocina;
