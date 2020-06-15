import React, { useState } from 'react';

const ProductCart = () => {
  const [adresses, setAdresses] = useState([]);
  const [productsOnCart, setProductsOnCart] = useState([]);

  return (
    <div className="d-flex flex-column">
      {/** Dirección */}
      <div className="d-flex flex-column justify-content-start">
        <h3 className="text-light">
          <b>Entregar en:</b>
        </h3>
        <select value="">
          <option value="local">Local</option>
          {adresses.map((adress, i) => (
            <option value={adress}>{adress}</option>
          ))}
        </select>
      </div>
      {/** Contenido del producto */}
      <div>
        {productsOnCart.map((productOnCart) => (
          <div className="w-100">
            <div>{productOnCart.nombre}</div>
            <div>
              <input type="number" value={productOnCart.cantidad} />
            </div>
            <div>$ {productOnCart.precio}</div>
          </div>
        ))}
      </div>
      {/** Botones */}
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary">Vaciar</button>
        <button className="btn btn-secondary">Finalizar</button>
      </div>
    </div>
  );
};

export default ProductCart;
