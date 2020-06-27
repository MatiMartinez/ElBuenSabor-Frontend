import React from 'react';

const SelectRoles = ({ register, conLabel }) => {
  return (
    <div className="form-group">
      {conLabel === true && (
        <label className="control-label" forhtml="rol">
          Rol
        </label>
      )}
      <select
        name="rol"
        id="rol"
        className="form-control"
        defaultValue={''}
        ref={register}
      >
        <option hidden disabled value="">
          Seleccione un rol
        </option>
        <option value="SinRol">Sin rol</option>
        <option value="Cocinero">Cocinero</option>
        <option value="Cajero">Cajero</option>
      </select>
    </div>
  );
};

export default SelectRoles;
