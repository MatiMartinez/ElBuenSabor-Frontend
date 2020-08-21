import React, { useState } from "react";
import InputFieldControl from "../../GlobalReusable/InputFieldControl";
import { updateUsuario } from "../../../API/ApiUsuario";
import TextField from "@material-ui/core/TextField";

export default function UserData({ toggleReload, userdb }) {
  const [userData, setUserData] = useState({
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
        <div className="input-group mb-4 w-100">
          <TextField
            id="date"
            name="fechaNacimiento"
            label="Fecha de Nacimiento"
            type="date"
            value={userData.fechaNacimiento}
            onChange={handleChange}
            className="ml-auto"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <InputFieldControl
          label="Teléfono"
          type="number"
          name="telefono"
          value={userData.telefono}
          handleChange={handleChange}
        />
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-cambiar" disabled={isEdit} type="submit">
            Cambiar
          </button>
        </div>
      </form>
    </div>
  );
}
