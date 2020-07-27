import React from "react";

import Image from "../../../../assets/food-duotone.png";

import "./SliderCardCategoria.css";

export default function SliderCardCategoria({ categoria }) {
  return (
    <div
      className="d-flex flex-column-reverse"
      style={{
        backgroundImage: `url(${categoria.imagenPath})`,
        width: "100%",
        height: "130px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-slider-card d-flex align-items-center justify-content-center">
        <h5>{categoria.denominacion}</h5>
      </div>
    </div>
  );
}
