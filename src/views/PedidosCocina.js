import React, { useState, useEffect } from 'react';
import PedidoCard from '../components/Cocinero/ListaPedidos/PedidoCard';

const PedidosCocina = () => {
  const [page, setPage] = useState(1);
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div className="d-flex flex-column mt-5">
        {/** Menu de acciones del cocinero */}
        <div className=""></div>
        {/** Pedidos */}
        <div className="container d-flex justify-content-around">
          {/** Pedidos actuales esperando cocinero */}
          <div className="border w-100 text-center">
            <h2>Pedidos</h2>
            <div>
              {pedidos.map((pedido) => (
                <PedidoCard key={pedido.id} pedido={pedido} />
              ))}
            </div>
            {loading && <p>Cargando...</p>}
          </div>
          {/** Pedidos tomados */}
          <div className="border w-100 text-center">
            <h2>Mis pedidos</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosCocina;
