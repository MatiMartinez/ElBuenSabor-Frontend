import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import InputField from "../../../GlobalReusable/InputField";
import { createDomicilio } from "../../../../API/ApiDomicilios";
import { useAuth0 } from "../../../../react-auth0-spa";
import { customStyle } from "../../../../utils/modalStyle";

export default function ModalAddAddress({
  isOpen,
  toggle,
  toggleReload,
  userdb,
}) {
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
    toggle();
    toggleReload();
  }

  return (
    <Modal isOpen={isOpen} ariaHideApp={false} style={customStyle}>
      <form onSubmit={handleSubmit(onSubmit)} className="form-group m-4">
        <InputField
          id="alias"
          label="Alias"
          type="text"
          name="alias"
          register={register}
          required={true}
        />
        <InputField
          id="calle"
          label="Calle"
          type="text"
          name="calle"
          register={register}
          required={true}
        />
        <div className="d-flex justify-content-between">
          <InputField
            id="numero"
            label="Número"
            type="number"
            name="numero"
            register={register}
            required={true}
          />
          <InputField
            id="localidad"
            label="Localidad"
            type="text"
            name="localidad"
            register={register}
            required={true}
          />
        </div>
        <div className="d-flex justify-content-between">
          <InputField
            id="departamento"
            label="Departamento"
            type="text"
            name="departamento"
            register={register}
            required={false}
          />
          <InputField
            id="piso"
            label="Piso"
            type="text"
            name="piso"
            register={register}
            required={false}
          />
        </div>
        <div className="d-flex justify-content-center border-top mt-4">
          <div className="d-flex justify-content-around pt-3 w-50">
            <button type="submit" className="btn btn-modal w-100 m-2">
              Crear
            </button>
            <button
              type="button"
              className="btn btn-modal-outline w-100 m-2"
              onClick={() => toggle()}
            >
              Cerrar
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
