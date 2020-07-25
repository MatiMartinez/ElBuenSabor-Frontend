import React from "react";
import InputField from "../../../../GlobalReusable/InputField";
import { useForm } from "react-hook-form";
import { createPlato, updatePlato } from "../../../../../API/ApiPlatos";
import SelectCategorias from "../../../../GlobalReusable/SelectCategorias";

export default function Form(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
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
      />
      <InputField
        id="tiempoCocina"
        label="Tiempo de cocina (minutos)"
        type="number"
        name="tiempoCocina"
        register={register}
      />
      <SelectCategorias
        register={register}
        label={true}
        allValue={false}
        raiz={false}
      />
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
