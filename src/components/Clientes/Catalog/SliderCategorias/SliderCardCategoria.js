import React from "react";

export default function SliderCardCategoria({ categoria, selectCategory }) {
  return (
    <div
      className="d-flex flex-column-reverse onclick-container"
      style={{
        backgroundImage: `url(${categoria.imagenPath})`,
        height: "130px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        margin: "10px",
      }}
      onClick={() => selectCategory(categoria._id)}
    >
      <div className="text-slider-card d-flex align-items-center justify-content-center">
        {categoria.denominacion}
      </div>
    </div>
  );
}
