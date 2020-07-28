import React from "react";
import { useForm } from "react-hook-form";
import { createPlato, updatePlato } from "../../../../../API/ApiPlatos";
import SelectCategorias from "../../../../GlobalReusable/SelectCategorias";
import InputField from "../../../../GlobalReusable/InputField";

export default function AddPlato(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await createPlato(data);
    props.siguiente();
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
      <InputField
        id="precioVenta"
        label="Precio de venta"
        type="number"
        name="precioVenta"
        register={register}
      />
      <InputField
        id="imagenPath"
        label="Imagen"
        type="text"
        name="imagenPath"
        register={register}
      />
      <SelectCategorias register={register} label={true} name="rubro" />
      {/** Boton siguiente del modal */}
      <div className="d-flex justify-content-center border-top mt-5">
        <div className="d-flex justify-content-center pt-3 w-50">
          <button className="btn btn-modal" type="submit">
            <i className="fas fa-long-arrow-alt-right mr-2"></i>Siguiente
          </button>
        </div>
      </div>
    </form>
  );
}
