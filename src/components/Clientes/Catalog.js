import React, { useState, useEffect } from "react";

// Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Catalog.css";
import Slider from "react-slick";
import ProductCart from "./Catalog/ProductCart";
import ProductCard from "./Catalog/ProductCard";
import Buscador from "./Catalog/Buscador";

const Catalog = () => {
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    /* Consumir api de categorias y productos de una categoria por defecto y
    guardar el categories con setCategories(data) */
  }, []);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="mt-5">
      {/** Buscador */}
      <div className="container d-flex justify-content-center">
        <form onSubmit={onSubmitBusqueda} className="d-flex w-50">
          <Buscador type="text" name="buscador" onChange={onChange} />
          <button className="btn btn-search" type="submit">
            Buscar
          </button>
        </form>
      </div>
      {/** Separador */}
      <div className="container w-50 text-center mt-4 mb-4">
        <hr />
      </div>
      {/** Categorías */}
      <div className="container text-center">
        <h5>Categorias</h5>
        <div className="mt-4">
          {categories.length === 0 ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading</span>
            </div>
          ) : (
            <Slider {...settings}>
              {categories.map((categorie, i) => (
                <ProductCard />
              ))}
            </Slider>
          )}
        </div>
      </div>
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
