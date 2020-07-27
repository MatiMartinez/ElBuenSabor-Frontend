import React, { useState } from "react";

// Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Catalog.css";
import Buscador from "./HeroCatalog/Buscador";
import SliderCategorias from "./SliderCategorias/SliderCategorias";
import Hero from "./HeroCatalog/HeroCatalog";
import CatalogoProductos from "./CatalogoProductos/CatalogoProductos";

const Catalog = () => {
  // Busqueda, form y estado de la busqueda
  const [busqueda, setBusqueda] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const onSubmitBusqueda = (e) => {
    e.preventDefault();
    console.log(busqueda);
  };

  const onChange = (e) => {
    e.preventDefault();
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
      <SliderCategorias setCategoriaSeleccionada={setCategoriaSeleccionada} />
      {/** Separador */}
      <hr className="container mb-5" />
      {/** Catalogo de productos */}
      <CatalogoProductos />
    </div>
  );
};

export default Catalog;
