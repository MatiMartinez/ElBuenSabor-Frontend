import React, { useState } from 'react';
import Insumos from './AdministrarCocina/Insumos';
import Categorias from './AdministrarCocina/Categorias';

import './AdministrarCocina.css';
import Platos from './AdministrarCocina/Platos';
import Manufacturados from './AdministrarCocina/Manufacturados';

const AdministrarCocina = () => {
  const [enable, setEnable] = useState(0);

  const toogle = (number) => {
    setEnable(number);
  };

  return (
    <div>
      {/** Nav Administrar Cocina */}
      <div className="d-flex justify-content-center pb-2 pt-2 border-top bg-secondary">
        <div className="d-flex justify-content-around w-50">
          <button className="btn btn-nav" onClick={() => toogle(0)}>
            Insumos
          </button>
          <button className="btn btn-nav" onClick={() => toogle(1)}>
            Manufacturados
          </button>
          <button className="btn btn-nav" onClick={() => toogle(2)}>
            Platos
          </button>
          <button className="btn btn-nav" onClick={() => toogle(3)}>
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
        {enable === 1 && (
          <div>
            <Manufacturados />
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
      </div>
    </div>
  );
};

export default AdministrarCocina;
