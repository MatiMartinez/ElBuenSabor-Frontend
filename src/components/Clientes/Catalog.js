import React, { useState, useEffect } from 'react';

// Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Catalog.css';
import Slider from 'react-slick';
import ProductCart from './Catalog/ProductCart';
import ProductCard from './Catalog/ProductCard';

const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /* Consumir api de categorias y productos de una categoria por defecto y
    guardar el categories con setCategories(data) */
  });

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="mt-4">
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
      {/** Separador */}
      <div className="container w-50 text-center mt-4">
        <hr />
      </div>
      {/** Categorías */}
      <div className="container mt-4 text-center">
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
        <div className="">
          <ProductCart />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
