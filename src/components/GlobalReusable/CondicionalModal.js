import React from "react";
import Modal from "react-modal";
import { customStyleCondicionalModal } from "../../utils/modalStyle";

export default function CondicionalModal({ isOpen, cond, toggleCondicional }) {
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      style={customStyleCondicionalModal}
    >
      <div className="d-flex flex-column align-items-center justify-content-between text-center m-5">
        {cond === true ? (
          <div className="mb-5">
            <i className="fas fa-check fa-4x text-success mb-3"></i>
            <h4>Plato creado</h4>
          </div>
        ) : (
          <div className="mb-5">
            <i className="fas fa-times fa-4x text-danger mb-3"></i>
            <h4>Algo falló...</h4>
          </div>
        )}
        <button
          className="btn btn-info w-25"
          onClick={() => toggleCondicional()}
        >
          Ok
        </button>
      </div>
    </Modal>
  );
}
