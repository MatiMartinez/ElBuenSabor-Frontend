import React, { useState } from 'react';

const PedidosCaja = () => {
  const [pedidos, setPedidos] = useState([]);

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {pedidos.map((pedido, i) => (
              <tr key={i}>
                {pedido.map((datosPedido, i) => (
                  <td key={i}>{datosPedido}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PedidosCaja;
