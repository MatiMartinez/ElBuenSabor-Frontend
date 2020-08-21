import React, { useState } from "react";
import InputFieldControl from "../../../GlobalReusable/InputFieldControl";
import {
  updateDomicilio,
  setBorradoDomicilio,
} from "../../../../API/ApiDomicilios";

export default function Address({ domicilio, toggleReload }) {
  const [domicilioState, setDomicilioState] = useState({
    alias: domicilio.alias,
    calle: domicilio.calle,
    numero: domicilio.numero,
    localidad: domicilio.localidad,
    piso: domicilio.piso,
    departamento: domicilio.departamento,
  });

  function handleChange(e) {
    setDomicilioState({ ...domicilioState, [e.target.name]: e.target.value });
    if (isEdit === true) {
      setIsEdit(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateDomicilio(domicilio._id, domicilioState);
    toggleReload();
  }

  async function borrarDomicilio() {
    await setBorradoDomicilio(domicilio._id);
    toggleReload();
  }

  // Funcion para desplegar el formulario de direcciones
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  // Estado de button cambiar
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="w-100 mb-4">
      <div
        className="d-flex justify-content-between"
        onClick={() => toggleVisible()}
      >
        <div className="d-flex">
          <i className="fas fa-map-marker-alt mr-3"></i>
          <p className="font-weight-bold">
            {domicilioState.alias}:{" "}
            {domicilioState.calle + " " + domicilioState.numero}
          </p>
        </div>
        {visible === true ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </div>
      {visible === true && (
        <form onSubmit={handleSubmit}>
          <InputFieldControl
            label="Alias"
            type="text"
            name="alias"
            value={domicilioState.alias}
            handleChange={handleChange}
          />
          <div className="d-flex">
            <InputFieldControl
              label="Calle"
              type="text"
              name="calle"
              value={domicilioState.calle}
              handleChange={handleChange}
            />
            <InputFieldControl
              label="Número"
              type="number"
              name="numero"
              value={domicilioState.numero}
              handleChange={handleChange}
            />
          </div>
          <InputFieldControl
            label="Localidad"
            type="text"
            name="localidad"
            value={domicilioState.localidad}
            handleChange={handleChange}
          />
          <InputFieldControl
            label="Piso"
            type="text"
            name="piso"
            value={domicilioState.piso}
            handleChange={handleChange}
          />
          <InputFieldControl
            label="Departamento"
            type="text"
            name="departamento"
            value={domicilioState.departamento}
            handleChange={handleChange}
          />
          <div className="d-flex flex-row-reverse">
            <button className="btn btn-cambiar" disabled={isEdit} type="submit">
              Cambiar
            </button>
            <button
              type="button"
              className="btn btn-borrar-domicilio"
              onClick={() => borrarDomicilio()}
            >
              Borrar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
