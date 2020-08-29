import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../../../react-auth0-spa";
import { getFormasPago } from "../../../../API/ApiOpciones";

export default function SelectEnvio({
  toggleEnvio,
  domicilio,
  setDomicilio,
  formaPago,
  setFormaPago,
}) {
  const { userdb } = useAuth0();

  const [domicilios, setDomicilios] = useState([]);
  const [formasPago, setFormasPago] = useState([]);
  const [envio, setEnvio] = useState("local");

  useEffect(() => {
    async function cargarFormasPago() {
      const data = await getFormasPago();
      setFormasPago(data);
    }
    setDomicilios(userdb.domicilios);
    cargarFormasPago();
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
            {domicilios.map((domicilio) => (
              <option key={domicilio._id} value={domicilio._id}>
                {domicilio.alias}
              </option>
            ))}
          </select>
        </div>
      )}
      {envio === "local" && (
        <div className="form-group m-2">
          <label className="control-label control-label-sm" htmlFor="formaPago">
            Tipo de pago
          </label>
          <select
            name="formaPago"
            id="formaPago"
            className="form-control form-control-sm"
            value={formaPago}
            onChange={(e) => setFormaPago(e.target.value)}
            required
          >
            {formasPago.map((formaPago, index) => (
              <option key={index} value={formaPago}>
                {formaPago}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
