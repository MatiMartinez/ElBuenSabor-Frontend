import React, { useState } from "react";
import { createInsumo, updateInsumo } from "../../../../../API/InsumosApi";
import SelectMedida from "../../../../GlobalReusable/SelectMedida";
import InputSmall from "../../../../GlobalReusable/InputSmall";
import SelectCategoria from "../../../../GlobalReusable/SelectCategoria";

export default function FormInsumos({ idEdit, toggle, toggleReload }) {
  const [insumo, setInsumo] = useState({
    denominacion: idEdit === undefined ? "" : idEdit.denominacion,
    precioCompra: idEdit === undefined ? 0 : idEdit.precioCompra,
    stockMinimo: idEdit === undefined ? 0 : idEdit.stockMinimo,
    stockMaximo: idEdit === undefined ? 0 : idEdit.stockMaximo,
    stockActual: idEdit === undefined ? 0 : idEdit.stockActual,
    unidadMedida: idEdit === undefined ? "" : idEdit.unidadMedida,
    rubro: idEdit === undefined ? "" : idEdit.rubro._id,
  });

  function onChange(e) {
    e.preventDefault();
    setInsumo({ ...insumo, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (idEdit === undefined) {
      await createInsumo(insumo);
      toggleReload();
      setInsumo({
        denominacion: "",
        precioCompra: 0,
        stockMinimo: 0,
        stockMaximo: 0,
        stockActual: 0,
        unidadMedida: "",
        rubro: "",
      });
    } else {
      await updateInsumo(idEdit._id, insumo);
      toggleReload();
      toggle(undefined);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputSmall
        id="denominacion"
        label="Denominación"
        type="text"
        name="denominacion"
        value={insumo.denominacion}
        onChange={onChange}
        required={true}
      />

      <div className="w-50">
        <InputSmall
          id="precioCompra"
          label="Precio de compra"
          type="number"
          name="precioCompra"
          value={insumo.precioCompra}
          onChange={onChange}
          required={true}
        />
      </div>
      <SelectMedida
        name="unidadMedida"
        value={insumo.unidadMedida}
        onChange={onChange}
        required={true}
      />
      <div className="d-flex justify-content-between">
        <InputSmall
          id="stockMinimo"
          label="Stock mínimo"
          type="number"
          name="stockMinimo"
          value={insumo.stockMinimo}
          onChange={onChange}
          required={true}
        />
        <InputSmall
          id="stockMaximo"
          label="Stock máximo"
          type="number"
          name="stockMaximo"
          value={insumo.stockMaximo}
          onChange={onChange}
          required={true}
        />
        <InputSmall
          id="stockActual"
          label="Stock Actual"
          type="number"
          name="stockActual"
          value={insumo.stockActual}
          onChange={onChange}
          required={true}
        />
      </div>
      <SelectCategoria
        name="rubro"
        value={insumo.rubro}
        onChange={onChange}
        tipo="insumo"
        required={true}
      />
      {/** Botones del modal */}
      <div className="d-flex justify-content-center border-top mt-4">
        <div className="d-flex justify-content-around pt-3 w-50">
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
