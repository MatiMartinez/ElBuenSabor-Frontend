import React, { useState } from "react";
import InputSmall from "../../../../GlobalReusable/InputSmall";
import { createReventa, updateReventa } from "../../../../../API/ArtReventaApi";
import SelectMedida from "../../../../GlobalReusable/SelectMedida";
import SelectCategoria from "../../../../GlobalReusable/SelectCategoria";

export default function Form({ idEdit, toggle, toggleReload }) {
  const [reventa, setReventa] = useState({
    denominacion: idEdit === undefined ? "" : idEdit.denominacion,
    precioCompra: idEdit === undefined ? 0 : idEdit.precioCompra,
    precioVenta: idEdit === undefined ? 0 : idEdit.precioVenta,
    stockMinimo: idEdit === undefined ? 0 : idEdit.stockMinimo,
    stockMaximo: idEdit === undefined ? 0 : idEdit.stockMaximo,
    stockActual: idEdit === undefined ? 0 : idEdit.stockActual,
    unidadMedida: idEdit === undefined ? "" : idEdit.unidadMedida,
    rubro: idEdit === undefined ? "" : idEdit.rubro._id,
    imagenPath: idEdit === undefined ? "" : idEdit.imagenPath,
  });

  function onChange(e) {
    setReventa({ ...reventa, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (idEdit === undefined) {
      await createReventa(reventa);
      toggleReload();
      setReventa({
        denominacion: "",
        precioCompra: 0,
        precioVenta: 0,
        stockMinimo: 0,
        stockMaximo: 0,
        stockActual: 0,
        unidadMedida: "",
        rubro: "",
        imagenPath: "",
      });
    } else {
      await updateReventa(idEdit._id, reventa);
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
        value={reventa.denominacion}
        onChange={onChange}
        required={true}
      />
      <div className="d-flex justify-content-between">
        <InputSmall
          id="precioCompra"
          label="Precio de Compra"
          type="number"
          name="precioCompra"
          value={reventa.precioCompra}
          onChange={onChange}
          required={true}
        />
        <InputSmall
          id="precioVenta"
          label="Precio de Venta"
          type="number"
          name="precioVenta"
          value={reventa.precioVenta}
          onChange={onChange}
          required={true}
        />
      </div>
      <SelectMedida
        value={reventa.unidadMedida}
        onChange={onChange}
        required={true}
        name="unidadMedida"
      />
      <div className="d-flex justify-content-between">
        <InputSmall
          id="stockMinimo"
          label="Stock Mínimo"
          type="number"
          name="stockMinimo"
          value={reventa.stockMinimo}
          onChange={onChange}
          required={true}
        />
        <InputSmall
          id="stockMaximo"
          label="Stock Máximo"
          type="number"
          name="stockMaximo"
          value={reventa.stockMaximo}
          onChange={onChange}
          required={true}
        />
        <InputSmall
          id="stockActual"
          label="Stock Actual"
          type="number"
          name="stockActual"
          value={reventa.stockActual}
          onChange={onChange}
          required={true}
        />
      </div>
      <SelectCategoria
        value={reventa.rubro}
        onChange={onChange}
        required={true}
        name="rubro"
        tipo="catalogo"
      />
      <InputSmall
        id="imagenPath"
        label="URL Imagen"
        type="text"
        name="imagenPath"
        value={reventa.imagenPath}
        onChange={onChange}
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
            Cerrar
          </button>
        </div>
      </div>
    </form>
  );
}
