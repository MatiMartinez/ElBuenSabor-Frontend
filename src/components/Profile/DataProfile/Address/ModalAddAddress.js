import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import InputField from "../../../GlobalReusable/InputField";
import { createDomicilio } from "../../../../API/ApiDomicilios";
import { useAuth0 } from "../../../../react-auth0-spa";

export default function ModalAddAddress({ isOpen }) {
  const { userdb } = useAuth0();
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    let domicilio = {
      usuario: userdb._id,
      alias: data.alias,
      calle: data.calle,
      numero: data.numero,
      localidad: data.localidad,
      piso: data.piso,
      departamento: data.departamento,
    };
    await createDomicilio(domicilio);
    window.location.reload(true);
  }

  return (
    <Modal isOpen={isOpen} ariaHideApp={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="alias"
          label="Alias"
          type="text"
          name="alias"
          register={register}
        />
        <InputField
          id="calle"
          label="Calle"
          type="text"
          name="calle"
          register={register}
        />
        <InputField
          id="numero"
          label="Número"
          type="number"
          name="numero"
          register={register}
        />
        <InputField
          id="localidad"
          label="Localidad"
          type="text"
          name="localidad"
          register={register}
        />
        <InputField
          id="piso"
          label="Piso"
          type="text"
          name="piso"
          register={register}
        />
        <InputField
          id="departamento"
          label="Departamento"
          type="text"
          name="departamento"
          register={register}
        />
        <button type="submit" className="btn btn-danger float-right">
          Crear
        </button>
      </form>
    </Modal>
  );
}
