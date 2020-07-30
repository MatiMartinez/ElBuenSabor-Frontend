import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SliderCardCategoria from "./SliderCardCategoria";

import { getRubrosCatalogo } from "../../../../API/ApiCategorias";

import "./SliderCategorias.css";

export default function SliderCategorias({ setCategoriaSeleccionada }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function cargarCategorias() {
      const data = await getRubrosCatalogo();
      setCategorias(data);
    }
    cargarCategorias();
  }, []);

  function seleccionarCategoria(data) {
    setCategoriaSeleccionada(data);
  }

  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <Slider className="w-100 row" {...settings}>
        {categorias.length !== 0 &&
          categorias.map((categoria) => (
            <div
              onClick={() => seleccionarCategoria(categoria._id)}
              className="onclick-container"
              key={categoria._id}
            >
              <SliderCardCategoria categoria={categoria} />
            </div>
          ))}
      </Slider>
    </div>
  );
}
