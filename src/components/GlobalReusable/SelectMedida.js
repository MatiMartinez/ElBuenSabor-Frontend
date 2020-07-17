import React from "react";

const SelectMedida = ({ register, defaultValue }) => {
  return (
    <div className="form-group">
      <label className="control-label" forhtml="selectMedida">
        Unidad de Medida
      </label>
      <select
        name="unidadMedida"
        id="selectMedida"
        className="form-control"
        defaultValue={defaultValue}
        ref={register}
      >
        <option hidden disabled value="">
          Seleccione una unidad de medida
        </option>
        <option value="Gramos">Gramos</option>
        <option value="Mililitros">Mililitros</option>
        <option value="Unidades">Unidades</option>
      </select>
    </div>
  );
};

export default SelectMedida;
