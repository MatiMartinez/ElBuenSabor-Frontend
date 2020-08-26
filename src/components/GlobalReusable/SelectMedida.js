import React, { useState, useEffect } from "react";
import { getUnidadesMedida } from "../../API/ApiOpciones";

const SelectMedida = ({ value, onChange, required, name }) => {
  const [medidas, setMedidas] = useState([]);

  useEffect(() => {
    async function cargarMedidas() {
      const data = await getUnidadesMedida();
      setMedidas(data);
    }
    cargarMedidas();
  }, []);

  return (
    <div className="form-group m-1">
      <label
        className="col-form-label col-form-label-sm"
        forhtml="selectMedida"
      >
        Unidad de Medida
      </label>
      <select
        name={name}
        id="selectMedida"
        className="form-control form-control-sm"
        value={value}
        onChange={onChange}
        required={required}
      >
        <option hidden disabled value="">
          Seleccione una unidad de medida
        </option>
        {medidas.map((medida, index) => (
          <option key={index} value={medida}>
            {medida}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMedida;
