import React, { useState } from "react";
import { createPlato, updatePlato } from "../../../../../API/ApiPlatos";
import InputSmall from "../../../../GlobalReusable/InputSmall";
import SelectCategoria from "../../../../GlobalReusable/SelectCategoria";
import CondicionalModal from "../../../../GlobalReusable/CondicionalModal";

export default function FormPlatos({ idEdit, toggleReload, toggle }) {
  const [plato, setPlato] = useState({
    denominacion: idEdit === undefined ? "" : idEdit.denominacion,
    tiempoCocina: idEdit === undefined ? 0 : idEdit.tiempoCocina,
    precioVenta: idEdit === undefined ? 0 : idEdit.precioVenta,
    imagenPath: idEdit === undefined ? "" : idEdit.imagenPath,
    rubro: idEdit === undefined ? "" : idEdit.rubro._id,
  });

  function onChange(e) {
    e.preventDefault();
    setPlato({ ...plato, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (idEdit === undefined) {
      const response = await createPlato(plato);
      console.log(response);
      if (response !== undefined) {
        setCond(true);
        toggleCondicional();
        toggleReload();
        setPlato({
          denominacion: idEdit === "",
          tiempoCocina: idEdit === 0,
          precioVenta: idEdit === 0,
          imagenPath: idEdit === "",
          rubro: idEdit === "",
        });
      } else {
        setCond(false);
        toggleCondicional();
      }
    } else {
      await updatePlato(idEdit._id, plato);
      toggleReload();
      toggle(undefined);
    }
  }

  // Modal condicional para verificar si se creo el plato
  const [isOpenCondicional, setIsOpenCondicional] = useState(false);
  const [cond, setCond] = useState(true);

  function toggleCondicional() {
    setIsOpenCondicional(!isOpenCondicional);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CondicionalModal
        isOpen={isOpenCondicional}
        cond={cond}
        toggleCondicional={toggleCondicional}
      />
      <InputSmall
        id="denominacion"
        label="Denominación"
        type="text"
        name="denominacion"
        value={plato.denominacion}
        onChange={onChange}
        required={true}
      />
      <InputSmall
        id="tiempoCocina"
        label="Tiempo de cocina (minutos)"
        type="number"
        name="tiempoCocina"
        value={plato.tiempoCocina}
        onChange={onChange}
        required={true}
      />
      <InputSmall
        id="precioVenta"
        label="Precio de venta"
        type="number"
        name="precioVenta"
        value={plato.precioVenta}
        onChange={onChange}
        required={true}
      />
      <InputSmall
        id="imagenPath"
        label="Imagen"
        type="text"
        name="imagenPath"
        value={plato.imagenPath}
        onChange={onChange}
        required={true}
      />
      <SelectCategoria
        name="rubro"
        value={plato.rubro}
        onChange={onChange}
        tipo="catalogo"
        required={true}
      />
      {/** Botones del modal */}
      <div className="d-flex justify-content-center border-top mt-5">
        <div className="d-flex justify-content-center pt-3 w-50">
          <button type="submit" className="btn btn-modal w-100 m-2">
            Guardar
          </button>
          <button
            className="btn btn-modal-outline w-100 m-2"
            onClick={() => toggle(undefined)}
          >
            Volver
          </button>
        </div>
      </div>
    </form>
  );
}
