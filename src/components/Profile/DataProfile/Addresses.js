import React, { useState } from "react";
import ModalAddAddress from "./Address/ModalAddAddress";
import Address from "./Address/Address";

export default function Addresses({ toggleReload, userdb }) {
  // Modal agregar domicilio
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <h6 className="text-muted mb-3">Direcciones:</h6>
      {userdb.domicilios.length !== 0 &&
        userdb.domicilios.map((domicilio) => (
          <Address
            key={domicilio._id}
            domicilio={domicilio}
            toggleReload={toggleReload}
          />
        ))}
      <div className="d-flex justify-content-center">
        <button className="btn btn-info" type="button" onClick={() => toggle()}>
          AGREGAR
        </button>
      </div>
      <ModalAddAddress
        isOpen={isOpen}
        toggle={toggle}
        toggleReload={toggleReload}
        userdb={userdb}
      />
    </div>
  );
}
