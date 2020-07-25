import React, { useState, useEffect } from "react";
import { getRoles } from "../../API/ApiOpciones";

const SelectRoles = ({ register, conLabel, opcionTodos }) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function cargarRoles() {
      const data = await getRoles();
      setRoles(data);
    }
    cargarRoles();
  }, []);

  return (
    <div className="form-group">
      {conLabel === true && (
        <label className="control-label" forhtml="rol">
          Rol
        </label>
      )}
      <select
        name="nombreRol"
        id="rol"
        className="form-control"
        defaultValue={""}
        ref={register}
      >
        {/** Boolean para validar si es necesaria la opción de todos los roles */}
        {opcionTodos === true ? (
          <option value="todos">Todos</option>
        ) : (
          <option value="" hidden disabled>
            Seleccione un rol
          </option>
        )}
        {roles.length !== 0 &&
          roles.map((rol) => (
            <option key={rol} value={rol}>
              {rol}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectRoles;
