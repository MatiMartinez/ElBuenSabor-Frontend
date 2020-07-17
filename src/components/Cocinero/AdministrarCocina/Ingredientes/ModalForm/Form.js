import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../GlobalReusable/InputField";

export default function Form(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

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
    </form>
  );
}
