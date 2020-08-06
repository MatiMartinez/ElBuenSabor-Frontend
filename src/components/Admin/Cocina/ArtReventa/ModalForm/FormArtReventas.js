import React from "react";
import InputField from "../../../../GlobalReusable/InputField";
import { useForm } from "react-hook-form";
import { createReventa, updateReventa } from "../../../../../API/ArtReventaApi";
import SelectCategorias from "../../../../GlobalReusable/SelectCategorias";
import SelectMedida from "../../../../GlobalReusable/SelectMedida";

export default function Form(props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    if (props.idEdit === undefined) {
      await createReventa(data);
      props.setReload(true);
      reset();
    } else {
      await updateReventa(props.idEdit._id, data);
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
      <div className="d-flex justify-content-between">
        <InputField
          id="precioCompra"
          label="Precio de Compra"
          type="number"
          name="precioCompra"
          register={register}
          defaultValue={
            props.idEdit === undefined ? "" : props.idEdit.precioCompra
          }
        />
        <InputField
          id="precioVenta"
          label="Precio de Venta"
          type="number"
          name="precioVenta"
          register={register}
          defaultValue={
            props.idEdit === undefined ? "" : props.idEdit.precioVenta
          }
        />
      </div>
      <SelectMedida
        register={register}
        defaultValue={
          props.idEdit === undefined ? "" : props.idEdit.unidadMedida
        }
      />
      <div className="d-flex justify-content-between">
        <InputField
          id="stockMinimo"
          label="Stock Mínimo"
          type="number"
          name="stockMinimo"
          register={register}
          defaultValue={
            props.idEdit === undefined ? "" : props.idEdit.stockMinimo
          }
        />
        <InputField
          id="stockMaximo"
          label="Stock Máximo"
          type="number"
          name="stockMaximo"
          register={register}
          defaultValue={
            props.idEdit === undefined ? "" : props.idEdit.stockMaximo
          }
        />
        <InputField
          id="stockActual"
          label="Stock Actual"
          type="number"
          name="stockActual"
          register={register}
          defaultValue={
            props.idEdit === undefined ? "" : props.idEdit.stockActual
          }
        />
      </div>
      <SelectCategorias
        register={register}
        label={true}
        name="rubro"
        defaultValue={props.idEdit === undefined ? "" : props.idEdit.rubro._id}
      />
      <InputField
        id="imagenPath"
        label="URL Imagen"
        type="text"
        name="imagenPath"
        register={register}
        defaultValue={props.idEdit === undefined ? "" : props.idEdit.imagenPath}
      />
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
            Cerrar
          </button>
        </div>
      </div>
    </form>
  );
}
