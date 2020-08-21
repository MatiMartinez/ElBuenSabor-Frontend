import React from "react";

const SelectData = ({ datos, label, id, register, name }) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="control-label">
        {label}
      </label>
      <select
        name={name}
        id={id}
        className="form-control"
        defaultValue={""}
        ref={register}
      >
        <option hidden disabled value="">
          Seleccione una categoría
        </option>
        {datos.map((dato) => (
          <option key={dato._id} value={dato._id}>
            {dato.denominacion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectData;
