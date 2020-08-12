import React from "react";
import { useCart } from "../../../../context/CartContext";

export default function ProductsOnCart() {
  const { platos, setPlatos } = useCart();

  async function removeProduct(index) {
    const values = [...platos];
    values.splice(index, 1);
    await setPlatos(values);
  }

  return (
    <div>
      {platos.map((plato, index) => (
        <div className="row producto-carrito" key={index}>
          <div className="col-1">{plato.cantidad}</div>
          <div className="col-8">
            <p>{plato.item.denominacion}</p>
            <p className="text-muted text-truncate">
              {plato.item.ingredientes.map((ingrediente) => {
                return ingrediente.insumo.denominacion + " ";
              })}
            </p>
            <button
              className="btn btn-quitar"
              type="button"
              onClick={() => removeProduct(index)}
            >
              Quitar
            </button>
          </div>
          <div className="col-3 d-flex">
            $ {plato.item.precioVenta * plato.cantidad}
          </div>
        </div>
      ))}
    </div>
  );
}
