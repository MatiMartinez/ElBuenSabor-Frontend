import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SliderCardCategoria from "./SliderCardCategoria";

import { getRubrosCatalogo } from "../../../../API/ApiCategorias";

export default function SliderCategorias({ setSelectedCategory }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function cargarCategorias() {
      const data = await getRubrosCatalogo();
      setCategorias(data);
    }
    cargarCategorias();
  }, []);

  function selectCategory(categoriaId) {
    setSelectedCategory(categoriaId);
  }

  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-categorias-container">
      <div className="container pt-4 pb-4 d-flex flex-column justify-content-center align-items-center">
        <h3>CATEGORÍAS</h3>
        <Slider className="w-100 mt-4 row" {...settings}>
          {categorias.length !== 0 &&
            categorias.map((categoria) => (
              <div
                onClick={() => selectCategory(categoria._id)}
                className="onclick-container"
                key={categoria._id}
              >
                <SliderCardCategoria categoria={categoria} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
