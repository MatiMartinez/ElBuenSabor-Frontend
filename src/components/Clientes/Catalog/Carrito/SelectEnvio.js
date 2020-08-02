import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../../../react-auth0-spa";

export default function SelectEnvio() {
  const { userdb } = useAuth0();

  const [domicilios, setDomicilios] = useState([]); // Domicilios del usuario, cargados para el select
  const [envio, setEnvio] = useState("local");
  const [domicilio, setDomicilio] = useState({}); // Domicilio seleccionado

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
          className="form-control form-control-sm"
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
            className="form-control form-control-sm"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
          >
            {domicilios.map((domicilio) => (
              <option key={domicilio._id} value={domicilio._id}>
                {domicilio.alias}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
