import React from "react";
import Modal from "react-modal";

import { customStyleCarrito } from "../../../../utils/modalStyle";
import SelectEnvio from "./SelectEnvio";

export default function ModalCarrito(props) {
  return (
    <Modal isOpen={props.isOpen} ariaHideApp={false} style={customStyleCarrito}>
      <div>
        <button className="btn float-right" onClick={() => props.toggle()}>
          <i className="fas fa-times fa-2x"></i>
        </button>
        <h4>Tu pedido</h4>
        <SelectEnvio />
      </div>
    </Modal>
  );
}
