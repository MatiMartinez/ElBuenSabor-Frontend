import React, { useState } from "react";
import moment from "moment";
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
    itemsOnCart,
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
    if (itemsOnCart !== 0) {
      //if (validarHora() === true) {
      const response = await createPedido(detallePedido);
      console.log(response);
      if (response !== undefined) {
        emptyCart();
        toggle();
      } else {
        toggleFallo();
      }
      //} else {
      //  toggleAlert();
      //  e.preventDefault();
      //}
    }
  }

  // Metodo para validar el horario de atencion
  function validarHora() {
    var date = Date.now();
    // Dia de la semana
    var dia = moment(date).format("ddd");
    var hora = moment().get("hour");
    if (hora >= 20 && hora <= 23) {
      return true;
    } else {
      if (dia === "Sat" || dia === "Sun") {
        if (hora >= 11 && hora <= 15) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  const [isOpenAlert, setIsOpenAlert] = useState(false);

  function toggleAlert() {
    setIsOpenAlert(!isOpenAlert);
  }

  const [isOpenFallo, setIsOpenFallo] = useState(false);

  function toggleFallo() {
    setIsOpenFallo(!isOpenFallo);
  }

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      className="modal-carrito"
      overlayClassName="modal-carrito-overlay"
    >
      {/* Modal para la alerta de horario de atencion */}
      <Modal
        isOpen={isOpenAlert}
        ariaHideApp={false}
        className="modal-alert"
        overlayClassName="modal-alert-overlay"
      >
        <button
          className="btn float-right m-0 p-0"
          onClick={() => toggleAlert()}
        >
          <i className="fas fa-times-circle fa-2x"></i>
        </button>
        <div>
          <h5 className="title-alert">Horario de atención</h5>
          <h6>Lun - Dom, 20 a 00</h6>
          <h6>Sab - Dom, 11 a 15</h6>
        </div>
      </Modal>
      {/* Modal fallo al crear el pedido */}
      <Modal
        isOpen={isOpenFallo}
        ariaHideApp={false}
        className="modal-alert"
        overlayClassName="modal-alert-overlay"
      >
        <button
          className="btn float-right m-0 p-0"
          onClick={() => toggleFallo()}
        >
          <i className="fas fa-times-circle fa-2x"></i>
        </button>
        <div>
          <h5 className="title-alert">¡Uy! Algo salió mal...</h5>
          <h6>Intenta nuevamente</h6>
        </div>
      </Modal>
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
