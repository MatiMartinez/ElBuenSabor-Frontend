import React from "react";
import { useForm } from "react-hook-form";
import { createInsumo, updateInsumo } from "../../../../../API/InsumosApi";
import InputField from "../../../../GlobalReusable/InputField";
import SelectMedida from "../../../../GlobalReusable/SelectMedida";
import SelectCategorias from "../../../../GlobalReusable/SelectCategorias";

export default function FormInsumos(props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    if (props.idEdit === undefined) {
      await createInsumo(data);
      props.setReload(true);
      reset();
    } else {
      await updateInsumo(props.idEdit._id, data);
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
      <div className="w-50">
        <InputField
          id="precioCompra"
          label="Precio de compra"
          type="number"
          name="precioCompra"
          register={register}
          defaultValue={
            props.idEdit === undefined ? 0 : props.idEdit.precioCompra
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
          label="Stock mínimo"
          type="number"
          name="stockMinimo"
          register={register}
          defaultValue={
            props.idEdit === undefined ? "" : props.idEdit.stockMinimo
          }
        />
        <InputField
          id="stockMaximo"
          label="Stock máximo"
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
            props.idEdit === undefined ? "" : props.idEdit.stockMaximo
          }
        />
      </div>
      <SelectCategorias
        register={register}
        label={true}
        name="rubro"
        defaultValue={props.idEdit === undefined ? "" : props.idEdit.rubro._id}
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
            Volver
          </button>
        </div>
      </div>
    </form>
  );
}
