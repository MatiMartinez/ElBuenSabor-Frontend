import React from "react";
import { useForm } from "react-hook-form";
import { createRubro, updateRubro } from "../../../../../API/CategoriasApi";
import SelectCategorias from "../../../../GlobalReusable/SelectCategorias";
import InputField from "../../../../GlobalReusable/InputField";

export default function Form(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (props.idEdit === undefined) {
      await createRubro(data);
    } else {
      await updateRubro(props.idEdit._id, data);
    }
    window.location.reload(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="denominacion"
        label="Denominación"
        type="text"
        name="denominacion"
        register={register}
        defaultValue={
          props.idEdit === undefined ? "" : props.idEdit.denominacion
        }
      />
      <SelectCategorias
        register={register}
        label={true}
        allValue={false}
        raiz={false}
      />
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            name="esRubroInsumo"
            className="custom-control-input"
            id="checkboxRubroInsumo"
            ref={register}
          />
          <label className="custom-control-label" htmlFor="checkboxRubroInsumo">
            Categoría de insumo
          </label>
        </div>
      </div>
      {/** Botones del modal */}
      <div className="d-flex justify-content-center border-top mt-5">
        <div className="d-flex justify-content-around pt-3 w-50">
          <button type="submit" className="btn btn-modal w-100 m-2">
            Guardar
          </button>
          <button
            className="btn btn-modal-outline w-100 m-2"
            onClick={() => props.setIsOpen(false)}
          >
            Volver
          </button>
        </div>
      </div>
    </form>
  );
}
