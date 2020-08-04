import React from "react";

import Modal from "react-modal";
import { customStyle } from "../../utils/modalStyle";

export default function ModalForm(props) {
  return (
    <Modal isOpen={props.isOpen} ariaHideApp={false} style={customStyle}>
      <div className="form-group m-4">{props.children}</div>
    </Modal>
  );
}
