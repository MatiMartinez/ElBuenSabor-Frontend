import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../../../react-auth0-spa";

export default function SelectEnvio() {
  const [domicilios, setDomicilios] = useState([]);
  const [envio, setEnvio] = useState("local");
  const [domicilio, setDomicilio] = useState({});

  const { userdb } = useAuth0();

  useEffect(() => {
    if (envio === "delivery") {
      setDomicilios(userdb.domicilios);
    }
  }, [envio, userdb.domicilios]);

  function handleChange(e) {
    setEnvio(e.target.value);
  }

  return (
    <div>
      <div className="form-group">
        <label className="control-label" htmlFor="envio">
          Envio
        </label>
        <select
          name="envio"
          id="envio"
          className="form-control"
          value={envio}
          onChange={(e) => handleChange(e)}
        >
          <option value="delivery">Delivery</option>
          <option value="local">Local</option>
        </select>
      </div>
      {envio === "delivery" && (
        <div className="form-group">
          <label className="control-label" htmlFor="domicilio">
            Domicilio
          </label>
          <select
            name="domicilio"
            id="domicilio"
            className="form-control"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
          >
            {domicilios.map((domicilio) => (
              <option value={domicilio.alias}>domicilio.alias</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
