import React, { useState } from "react";
import Modal from "react-modal";
import { useCart } from "../../../../context/CartContext";

export default function ModalProducto({ isOpen, toggle, producto }) {
  const { platos, setPlatos, itemsOnCart, setItemsOnCart } = useCart();

  const [cantidad, setCantidad] = useState(1);

  async function addProduct(producto, cantidad) {
    await setPlatos([...platos, { item: producto, cantidad: cantidad }]);
    await setItemsOnCart(itemsOnCart + Number(cantidad));
    toggle();
    setCantidad(1);
  }

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      className="modal-producto"
      overlayClassName="modal-producto-overlay"
    >
      <div>
        <button className="btn float-right" onClick={() => toggle()}>
          <i className="fas fa-times fa-2x"></i>
        </button>
        <h2>{producto.denominacion}</h2>
        <p className="text-muted">
          {producto.ingredientes !== undefined &&
            producto.ingredientes.map((ingrediente) => {
              return ingrediente.insumo.denominacion + " ";
            })}
        </p>
        <img
          src={producto.imagenPath}
          alt="img-producto"
          className="img-fluid"
        />
        <div className="d-flex justify-content-between mt-3">
          <input
            className="form-control w-25"
            type="number"
            name="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
          <button
            className="btn btn-danger"
            onClick={() => addProduct(producto, cantidad)}
          >
            <i className="fas fa-cart-plus mr-2"></i>
            <b>Agregar - $ {producto.precioVenta * cantidad}</b>
          </button>
        </div>
      </div>
    </Modal>
  );
}
