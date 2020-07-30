import React from "react";

import "./ProductoCard.css";

export default function ProductoCard({ producto }) {
  return (
    <div className="card mb-4" style={{ maxHeight: "110px" }}>
      <div className="row h-100">
        <div className="col-md-8 my-auto">
          <div className="card-body p-2 pl-4">
            <h6 className="m-0">{producto.denominacion}</h6>
            <p className="text-producto text-muted m-0">
              Descripcion de los ingredientes del plato, y quizas tambien una
              breve.
            </p>
            <h6 className="m-0">$ {producto.precioVenta}</h6>
          </div>
        </div>
        <div className="col-md-4 my-auto">
          <img
            src={producto.imagenPath}
            className="card-img p-0 m-0"
            alt="img-producto"
          />
        </div>
      </div>
    </div>
  );
}
