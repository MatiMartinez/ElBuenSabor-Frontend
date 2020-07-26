import React, { useState, useEffect } from "react";
import Slider from "react-slick";

export default function SliderCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function cargarCategorias() {}
    cargarCategorias();
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
    <div className="container">
      <Slider {...settings}></Slider>
    </div>
  );
}
