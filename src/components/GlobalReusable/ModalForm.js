import React from "react";

import Modal from "react-modal";
import { customStyle } from "../../utils/modalStyle";

export default function ModalForm(props) {
  return (
    <Modal isOpen={props.isOpen} ariaHideApp={false} style={customStyle}>
      <div className="p-4" style={{ background: "#ad2118" }}>
        {props.idEdit === undefined ? (
          <h2 className="text-white">Crear</h2>
        ) : (
          <h2 className="text-white">Editar</h2>
        )}
      </div>
      <div className="form-group m-4">{props.children}</div>
    </Modal>
  );
}
