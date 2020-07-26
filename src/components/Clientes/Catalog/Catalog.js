import React, { useState } from "react";

// Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Catalog.css";
import Buscador from "./HeroCatalog/Buscador";
import SliderCategorias from "./SliderCategorias/SliderCategorias";
import Hero from "./HeroCatalog/HeroCatalog";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  // Busqueda, form y estado de la busqueda
  const [busqueda, setBusqueda] = useState(null);

  const onSubmitBusqueda = (e) => {
    e.preventDefault();
    console.log(busqueda);
  };

  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setBusqueda(e.target.value);
  };

  return (
    <div className="">
      {/** Hero */}
      <Hero>
        <form onSubmit={onSubmitBusqueda} className="w-50">
          <Buscador onChange={onChange} />
        </form>
      </Hero>
      {/** Categorías */}
      <SliderCategorias />
      {/** Catalogo de productos por categorías y carrito */}
      <div className="container mt-4">
        <div className="d-flex justify-content-between">
          {products.map((product, i) => (
            <div>Aqui retorno los productos</div>
          ))}
        </div>
        {/** Carrito */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Catalog;
