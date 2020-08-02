import React from "react";
import Modal from "react-modal";

import { customStyleCarrito } from "../../../../utils/modalStyle";
import SelectEnvio from "./SelectEnvio";
import ProductsOnCart from "./ProductsOnCart";
import { useCart } from "../../../../context/CartContext";

export default function ModalCarrito({ toggle, isOpen }) {
  const {
    subTotal,
    platos,
    setPlatos,
    reventas,
    setReventas,
    setItemsOnCart,
  } = useCart();

  function emptyCart() {
    setPlatos([]);
    setReventas([]);
    setItemsOnCart(Number(0));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const platosId = platos.map((plato) => {
      return { item_id: plato.item._id, cantidad: plato.cantidad };
    });
    const reventasId = reventas.map((reventa) => {
      return { item_id: reventa.item._id, cantidad: reventa.cantidad };
    });
    console.log(platosId);
    console.log(reventasId);
    const detallePedido = {
      platos: platosId,
      reventas: reventasId,
      subtotal: subTotal,
    };
    console.log(detallePedido);
  }

  return (
    <Modal isOpen={isOpen} ariaHideApp={false} style={customStyleCarrito}>
      <form
        className="d-flex flex-column justify-content-between h-100"
        onSubmit={handleSubmit}
      >
        <div>
          <button className="btn float-right" onClick={() => toggle()}>
            <i className="fas fa-times fa-2x"></i>
          </button>
          <h4>Tu pedido</h4>
          <SelectEnvio />
          <ProductsOnCart />
        </div>
        <div className="d-flex">
          <button
            className="btn btn-light w-50 rounded m-2"
            type="button"
            onClick={() => emptyCart()}
          >
            Vaciar
          </button>
          <button
            className="btn btn-terminar-pedido w-50 rounded m-2"
            type="submit"
          >
            Terminar $ {subTotal}
          </button>
        </div>
      </form>
    </Modal>
  );
}
