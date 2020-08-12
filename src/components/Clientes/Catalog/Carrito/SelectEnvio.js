import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../../../react-auth0-spa";

export default function SelectEnvio({ toggleEnvio, domicilio, setDomicilio }) {
  const { userdb } = useAuth0();

  const [domicilios, setDomicilios] = useState([]); // Domicilios del usuario, cargados para el select
  const [envio, setEnvio] = useState("local");

  useEffect(() => {
    if (envio === "delivery") {
      setDomicilios(userdb.domicilios);
    }
    // eslint-disable-next-line
  }, [envio]);

  function handleChange(e) {
    setEnvio(e.target.value);
    toggleEnvio(e.target.value);
  }

  return (
    <div className="w-75">
      <div className="form-group m-2">
        <label className="control-label control-label-sm" htmlFor="envio">
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
        <div className="form-group m-2">
          <label className="control-label control-label-sm" htmlFor="domicilio">
            Domicilio
          </label>
          <select
            name="domicilio"
            id="domicilio"
            className="form-control form-control-sm"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
            required
          >
            <option hidden disabled value="">
              Seleccione un domicilio...
            </option>
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
