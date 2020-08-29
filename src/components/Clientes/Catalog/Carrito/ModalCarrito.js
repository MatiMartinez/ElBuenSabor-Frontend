import React, { useState } from "react";
import Modal from "react-modal";

import SelectEnvio from "./SelectEnvio";
import ProductsOnCart from "./ProductsOnCart";
import { useCart } from "../../../../context/CartContext";
import { useAuth0 } from "../../../../react-auth0-spa";
import { createPedido } from "../../../../API/ApiPedidos";

export default function ModalCarrito({ toggle, isOpen }) {
  const {
    subTotal,
    platos,
    setPlatos,
    reventas,
    setReventas,
    setItemsOnCart,
  } = useCart();

  const { userdb } = useAuth0();

  function emptyCart() {
    setPlatos([]);
    setReventas([]);
    setItemsOnCart(Number(0));
  }

  const [delivery, setDelivery] = useState(false);
  const [domicilio, setDomicilio] = useState("");
  const [formaPago, setFormaPago] = useState("Efectivo");

  function toggleEnvio(data) {
    if (data === "local") {
      setDelivery(false);
    } else {
      setDelivery(true);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const platosId = platos.map((plato) => {
      return { item_id: plato.item._id, cantidad: plato.cantidad };
    });
    const reventasId = reventas.map((reventa) => {
      return { item_id: reventa.item._id, cantidad: reventa.cantidad };
    });
    var detallePedido = {};
    if (domicilio === "") {
      detallePedido = {
        usuario: userdb._id,
        delivery: delivery,
        formaPago: formaPago,
        platos: platosId,
        reventas: reventasId,
      };
    } else {
      detallePedido = {
        usuario: userdb._id,
        delivery: delivery,
        formaPago: "Efectivo",
        domicilio: domicilio,
        platos: platosId,
        reventas: reventasId,
      };
    }
    console.log(detallePedido);
    await createPedido(detallePedido);
    emptyCart();
    toggle();
  }

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      className="modal-carrito"
      overlayClassName="modal-carrito-overlay"
    >
      <form
        className="d-flex flex-column justify-content-between h-100"
        onSubmit={handleSubmit}
      >
        <div>
          <button className="btn float-right m-3" onClick={() => toggle()}>
            <i className="fas fa-times-circle fa-2x"></i>
          </button>
          <div className="m-4">
            <h3 className="mt-3 mb-3">Tu pedido</h3>
            <SelectEnvio
              toggleEnvio={toggleEnvio}
              domicilio={domicilio}
              setDomicilio={setDomicilio}
              formaPago={formaPago}
              setFormaPago={setFormaPago}
            />
          </div>
          <ProductsOnCart />
        </div>
        <div className="d-flex p-2">
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
