import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import ModalAddAddress from "./Address/ModalAddAddress";
import Address from "./Address/Address";

export default function Addresses() {
  const { userdb } = useAuth0();
  const [domicilios, setDomicilios] = useState([]);

  useEffect(() => {
    setDomicilios(userdb.domicilios);
  }, [userdb.domicilios]);

  // Modal agregar domicilio
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <h6 className="text-muted mb-3">Direcciones:</h6>
      {domicilios.length !== 0 &&
        domicilios.map((domicilio) => (
          <Address key={domicilio._id} domicilio={domicilio} />
        ))}
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary w-25"
          type="button"
          onClick={() => toggle()}
        >
          <i className="fas fa-map-marker-alt mr-2"></i>AGREGAR
        </button>
      </div>
      <ModalAddAddress isOpen={isOpen} toggle={toggle} />
    </div>
  );
}
