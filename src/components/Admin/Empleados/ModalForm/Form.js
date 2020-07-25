import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createRol } from "../../../../API/ApiRoles";
import InputEmail from "./InputEmail";
import SelectRoles from "../../../GlobalReusable/SelectRoles";

export default function Form(props) {
  const { register, handleSubmit } = useForm();
  const [idEncontrado, setIdEncontrado] = useState("");

  const onSubmit = async (data) => {
    const rol = { usuario: idEncontrado, nombreRol: data.nombreRol };
    await createRol(rol);
    window.location.reload(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputEmail
        idEncontrado={idEncontrado}
        setIdEncontrado={setIdEncontrado}
      />
      {idEncontrado !== "" && (
        <SelectRoles conLabel={true} register={register} opcionTodos={false} />
      )}
      {/** Botones del modal */}
      <div className="d-flex justify-content-center border-top mt-5">
        <div className="d-flex justify-content-around pt-3 w-50">
          <button
            type="submit"
            className="btn btn-modal w-100 m-2"
            disabled={idEncontrado === ""}
          >
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
