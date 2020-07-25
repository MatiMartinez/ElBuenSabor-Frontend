import React, { useState } from "react";
import { getUsuarioByEmail } from "../../../../API/ApiUsuario";
import { useForm } from "react-hook-form";

export default function InputEmail({ idEncontrado, setIdEncontrado }) {
  const { register, getValues } = useForm();
  const [usuario, setUsuario] = useState({});

  async function buscarEmail() {
    const email = await getValues("email");
    const usuario = await getUsuarioByEmail(email);
    if (usuario.email) {
      setUsuario(usuario);
      setIdEncontrado(usuario._id);
    } else {
      setIdEncontrado("");
    }
  }

  return (
    <div>
      <div className="form-group">
        <label className="control-label" forhtml="email">
          Email
        </label>
        <div className="form-inline my-2 my-lg-0">
          <input
            className="form-control w-75"
            id="email"
            type="email"
            name="email"
            ref={register}
          />
          <button
            type="button"
            className="btn ml-auto w-25"
            onClick={() => buscarEmail()}
          >
            <i className="fas fa-search mr-2"></i>Buscar
          </button>
        </div>
      </div>
      {/** Datos del email si se encuentra */}
      {idEncontrado !== "" ? (
        <div className="text-center">
          Usuario Encontrado{" "}
          <b>
            {usuario.nombre} {usuario.apellido}
          </b>
        </div>
      ) : (
        <div className="text-center">
          No hay usuario registrado con ese email
        </div>
      )}
      <hr></hr>
    </div>
  );
}
