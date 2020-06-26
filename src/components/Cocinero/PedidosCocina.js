import React, { useState, useEffect } from 'react';

import PedidoCard from './PedidoCard';

const PedidosCocina = () => {
  return (
    <div>
      <div className="d-flex flex-column mt-5">
        {/** Menu de acciones del cocinero */}
        <div className=""></div>
        {/** Pedidos */}
        <div className="container d-flex justify-content-around">
          {/** Pedidos actuales esperando cocinero */}
          <div className="border col-5 text-center p-0">
            <div className="m-4">
              <h1>Pedidos</h1>
            </div>
            <div className="w-100"></div>
          </div>
          {/** Pedidos tomados */}
          <div className="border col-5 text-center">
            <div className="m-4">
              <h1>Mis pedidos</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosCocina;
