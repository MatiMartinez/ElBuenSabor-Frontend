import React, { useState } from "react";
import { getUsuario } from "../../../../API/ApiUsuario";

export default function InputEmail({ idEncontrado, setIdEncontrado }) {
  const [usuario, setUsuario] = useState({});

  const [email, setEmail] = useState("");

  async function buscarEmail() {
    const usuario = await getUsuario(email);
    if (usuario) {
      setUsuario(usuario);
      await setIdEncontrado(usuario._id);
    } else {
      await setIdEncontrado("");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-secondary ml-auto"
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
