import React from "react";
import Modal from "react-modal";

import { customStyleCarrito } from "../../../../utils/modalStyle";
import SelectEnvio from "./SelectEnvio";
import ProductsOnCart from "./ProductsOnCart";
import { useCart } from "../../../../context/CartContext";

export default function ModalCarrito({ toggle, isOpen }) {
  const { subTotal, setPlatos, setReventas } = useCart();

  async function emptyCart() {
    await setPlatos([]);
    await setReventas([]);
  }

  return (
    <Modal isOpen={isOpen} ariaHideApp={false} style={customStyleCarrito}>
      <form>
        <div>
          <button className="btn float-right" onClick={() => toggle()}>
            <i className="fas fa-times fa-2x"></i>
          </button>
          <h4>Tu pedido</h4>
          <SelectEnvio />
          <ProductsOnCart />
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
        </div>
      </form>
    </Modal>
  );
}
