import React, { useState, useEffect } from 'react';

import PedidoCard from './PedidoCard';

import { getPedidos } from '../../API/Cocinero/ApiCocinero';

const PedidosCocina = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    cargarPedidos();
  }, []);

  const cargarPedidos = async () => {
    const newPedidos = await getPedidos();
    setPedidos(newPedidos);
  };

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
            <div className="w-100">
              {pedidos &&
                pedidos.map((pedido) => (
                  <PedidoCard key={pedido.id} pedido={pedido} />
                ))}
            </div>
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
