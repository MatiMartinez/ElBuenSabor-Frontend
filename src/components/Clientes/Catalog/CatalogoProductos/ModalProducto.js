import React from "react";
import Modal from "react-modal";
import { customStyleProduct } from "../../../../utils/modalStyle";

export default function ModalProducto({
  isOpen,
  setIsOpen,
  producto,
  addCarrito,
}) {
  return (
    <Modal isOpen={isOpen} ariaHideApp={false} style={customStyleProduct}>
      <div>
        <button className="btn float-right" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-times fa-2x"></i>
        </button>
        <h2>{producto.denominacion}</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img
          src={producto.imagenPath}
          alt="img-producto"
          className="img-fluid"
        />
        <div className="float-right mt-3">
          <button
            className="btn btn-danger"
            onClick={() => addCarrito(producto)}
          >
            <i className="fas fa-cart-plus mr-2"></i>
            <b>Agregar - $ {producto.precioVenta}</b>
          </button>
        </div>
      </div>
    </Modal>
  );
}
