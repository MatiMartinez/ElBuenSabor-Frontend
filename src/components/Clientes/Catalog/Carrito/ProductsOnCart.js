import React from "react";
import { useCart } from "../../../../context/CartContext";

export default function ProductsOnCart() {
  const {
    platos,
    setPlatos,
    reventas,
    setReventas,
    itemsOnCart,
    setItemsOnCart,
  } = useCart();

  async function removePlato(index) {
    const values = [...platos];
    values.splice(index, 1);
    await setPlatos(values);
    setItemsOnCart(Number(itemsOnCart) - Number(platos[index].cantidad));
  }

  async function removeReventa(index) {
    const values = [...reventas];
    values.splice(index, 1);
    await setReventas(values);
    setItemsOnCart(Number(itemsOnCart) - Number(reventas[index].cantidad));
  }

  return (
    <div>
      {platos.length !== 0 &&
        platos.map((plato, index) => (
          <div className="producto-carrito" key={index}>
            <div className="row">
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
                  onClick={() => removePlato(index)}
                >
                  Quitar
                </button>
              </div>
              <div className="col-3 d-flex">
                $ {plato.item.precioVenta * plato.cantidad}
              </div>
            </div>
          </div>
        ))}
      {reventas.length !== 0 &&
        reventas.map((reventa, index) => (
          <div className="row producto-carrito" key={index}>
            <div className="col-1">{reventa.cantidad}</div>
            <div className="col-8">
              <p>{reventa.item.denominacion}</p>

              <button
                className="btn btn-quitar"
                type="button"
                onClick={() => removeReventa(index)}
              >
                Quitar
              </button>
            </div>
            <div className="col-3 d-flex">
              $ {reventa.item.precioVenta * reventa.cantidad}
            </div>
          </div>
        ))}
    </div>
  );
}
