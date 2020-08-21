import React, { useState } from "react";
import SelectInsumos from "../../../../GlobalReusable/SelectInsumos";
import SelectCategoria from "../../../../GlobalReusable/SelectCategoria";
import InputSmall from "../../../../GlobalReusable/InputSmall";
import { addIngredientes } from "../../../../../API/ApiPlatos";

export default function FormIngredientes({ idEdit, toggle, toggleReload, id }) {
  const [categoria, setCategoria] = useState(idEdit === undefined ? "" : ""); // Falta el rubro del insumo
  const [ingrediente, setIngrediente] = useState({
    insumo_id: idEdit === undefined ? "" : idEdit.insumo._id,
    cantidad: idEdit === undefined ? 1 : idEdit.cantidad,
  });

  function onChange(e) {
    setIngrediente({ ...ingrediente, [e.target.name]: e.target.value });
  }

  function onChangeCategoria(e) {
    setCategoria(e.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // Correccion de la ruta para crear ingrediente
    let data = [];
    data[0] = ingrediente;
    if (idEdit === undefined) {
      await addIngredientes(id, data);
      toggleReload();
      setCategoria("");
      setIngrediente({ insumo_id: "", cantidad: 1 });
    } else {
      // Editar Ingrediente
      toggle();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h6>Agregar Ingrediente</h6>
      </div>
      <div className="d-flex justify-content-between">
        <SelectCategoria
          name="categoria"
          value={categoria}
          onChange={onChangeCategoria}
          tipo="insumo"
        />
        <SelectInsumos
          rubroId={categoria}
          value={ingrediente.insumo_id}
          onChange={onChange}
        />
      </div>
      <div className="w-50">
        <InputSmall
          id="cantidad"
          label="Cantidad"
          type="number"
          name="cantidad"
          value={ingrediente.cantidad}
          onChange={onChange}
          required={true}
        />
      </div>
      {/** Botones del modal */}
      <div className="d-flex justify-content-center border-top mt-5">
        <div className="d-flex justify-content-center pt-3 w-50">
          <button type="submit" className="btn btn-modal w-100 m-2">
            Guardar
          </button>
          <button
            className="btn btn-modal-outline w-100 m-2"
            onClick={() => toggle()}
          >
            Volver
          </button>
        </div>
      </div>
    </form>
  );
}
