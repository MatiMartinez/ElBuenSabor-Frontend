import React from "react";
import InputField from "../../../../GlobalReusable/InputField";
import { useForm } from "react-hook-form";
import { createPlato, updatePlato } from "../../../../../API/ApiPlatos";
import SelectCategorias from "../../../../GlobalReusable/SelectCategorias";

export default function FormPlatos(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    if (props.idEdit === undefined) {
      await createPlato(data);
    } else {
      await updatePlato(props.idEdit._id, data);
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
      <InputField
        id="tiempoCocina"
        label="Tiempo de cocina (minutos)"
        type="number"
        name="tiempoCocina"
        register={register}
        defaultValue={
          props.idEdit === undefined ? "" : props.idEdit.tiempoCocina
        }
      />
      <InputField
        id="precioVenta"
        label="Precio de venta"
        type="number"
        name="precioVenta"
        register={register}
        defaultValue={
          props.idEdit === undefined ? "" : props.idEdit.precioVenta
        }
      />
      <InputField
        id="imagenPath"
        label="Imagen"
        type="text"
        name="imagenPath"
        register={register}
        defaultValue={props.idEdit === undefined ? "" : props.idEdit.imagenPath}
      />
      <SelectCategorias
        register={register}
        label={true}
        name="rubro"
        defaultValue={props.idEdit === undefined ? "" : props.idEdit.rubro._id}
      />
      {/** Boton siguiente del modal */}
      <div className="d-flex justify-content-center border-top mt-5">
        <div className="d-flex justify-content-center pt-3 w-50">
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
