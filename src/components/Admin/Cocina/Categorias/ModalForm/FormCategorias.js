import React from "react";
import { useForm } from "react-hook-form";
import { createRubro, updateRubro } from "../../../../../API/ApiCategorias";
import SelectCategorias from "../../../../GlobalReusable/SelectCategorias";
import InputField from "../../../../GlobalReusable/InputField";
import CheckBoxField from "../../../../GlobalReusable/CheckBoxField";

export default function FormCategorias(props) {
  const { register, handleSubmit, watch, reset } = useForm();
  const rubroPadre = watch("rubroPadre");
  const esRubroInsumo = watch("esRubroInsumo");

  const onSubmit = async (data) => {
    if (data.rubroPadre === "") {
      data.rubroPadre = null;
    }
    if (props.idEdit === undefined) {
      await createRubro(data);
      props.setReload(true);
      reset();
    } else {
      await updateRubro(props.idEdit._id, data);
      props.setReload(true);
      props.setIsOpen(false);
    }
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
        name="rubroPadre"
        register={register}
        label={true}
        allValue={false}
        sinRubro={true}
        defaultValue={props.idEdit === undefined ? "" : props.idEdit.rubroPadre}
      />
      <CheckBoxField
        name="esRubroInsumo"
        label="Categoría de insumo"
        id="checkboxRubroInsumo"
        register={register}
        defaultValue={
          props.idEdit === undefined ? false : props.idEdit.esRubroInsumo
        }
      />
      {/** Valida si es un rubro de catalogo para mostrar el campo imagenPath */}
      {rubroPadre === "" && esRubroInsumo === false && (
        <InputField
          id="imagenPath"
          label="Imagen"
          type="text"
          name="imagenPath"
          register={register}
          defaultValue={
            props.idEdit === undefined ? "" : props.idEdit.imagenPath
          }
        />
      )}
      {/** Botones del modal */}
      <div className="d-flex justify-content-center border-top mt-4">
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
