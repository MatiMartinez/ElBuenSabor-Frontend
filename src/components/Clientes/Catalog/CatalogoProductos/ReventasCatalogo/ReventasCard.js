import React from "react";

export default function ReventasCard({ seleccionarProducto, producto }) {
  return (
    <div
      className="card card-product mb-4"
      onClick={() => seleccionarProducto(producto, false)}
    >
      <div className="row h-100">
        <div className="col-12 col-md-8 my-auto">
          <div className="card-body p-2 pl-4">
            <h6 className="m-0">{producto.denominacion}</h6>
            <h6 className="m-0">$ {producto.precioVenta}</h6>
          </div>
        </div>
        <div className="col-12 col-md-4 my-auto">
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
