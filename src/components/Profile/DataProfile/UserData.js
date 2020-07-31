import React, { useState } from "react";
import InputFieldControl from "../../GlobalReusable/InputFieldControl";
import { useAuth0 } from "../../../react-auth0-spa";
import { updateUsuario } from "../../../API/ApiUsuario";

export default function UserData() {
  const { userdb } = useAuth0();

  const [userData, setUserData] = useState({
    email: userdb.email,
    nombre: userdb.nombre,
    apellido: userdb.apellido,
    fechaNacimiento: userdb.fechaNacimiento,
    telefono: userdb.telefono,
  });

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    if (isEdit === true) {
      setIsEdit(false);
    }
  }

  async function handleSubmit(e) {
    await updateUsuario(userdb._id, userData);
  }

  // Estado de button cambiar
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="container">
      <h6 className="text-muted mb-3">Información Personal:</h6>
      <form onSubmit={handleSubmit}>
        <InputFieldControl
          label="Email"
          type="text"
          name="email"
          value={userData.email}
          handleChange={handleChange}
        />
        <InputFieldControl
          label="Nombre"
          type="text"
          name="nombre"
          value={userData.nombre}
          handleChange={handleChange}
        />
        <InputFieldControl
          label="Apellido"
          type="text"
          name="apellido"
          value={userData.apellido}
          handleChange={handleChange}
        />
        <InputFieldControl
          label="Fecha de Nacimiento"
          type="text"
          name="fechaNacimiento"
          value={userData.fechaNacimiento}
          handleChange={handleChange}
        />
        <InputFieldControl
          label="Teléfono"
          type="number"
          name="telefono"
          value={userData.telefono}
          handleChange={handleChange}
        />
        <button
          className="btn btn-cambiar btn-secondary"
          disabled={isEdit}
          type="submit"
        >
          Cambiar
        </button>
      </form>
    </div>
  );
}
