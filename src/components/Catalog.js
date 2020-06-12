import React from 'react';

import './Catalog.css';

const Catalog = () => {
  return (
    <div className="mt-5">
      {/** Buscador */}
      <div className="container">
        <form class="d-flex flex-row w-100 rounded-0 form-search">
          <div className="col-10 search-content">
            <input
              class="form-control input-search rounded-0 w-100 h-100"
              type="text"
              placeholder="Buscar productos..."
            />
          </div>
          <div className="w-100 search-content">
            <button class="btn btn-search rounded-0 w-100 h-100" type="submit">
              Buscar
            </button>
          </div>
        </form>
      </div>
      {/** Categorías */}
      <div className="container"></div>
      {/** Catalogo de productos por categorías y carrito */}
      <div></div>
    </div>
  );
};

export default Catalog;
