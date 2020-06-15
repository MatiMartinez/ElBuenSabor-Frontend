import React from 'react';

const PedidoCard = ({ pedido }) => {
  return (
    <div className="border">
      <h2>{pedido.id}</h2>
    </div>
  );
};

export default PedidoCard;
