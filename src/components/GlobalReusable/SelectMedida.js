import React, { useState, useEffect } from "react";
import { getUnidadesMedida } from "../../API/ApiOpciones";

const SelectMedida = ({ register, defaultValue }) => {
  const [medidas, setMedidas] = useState([]);

  useEffect(() => {
    async function cargarMedidas() {
      const data = await getUnidadesMedida();
      setMedidas(data);
    }
    cargarMedidas();
  }, []);

  const [value, setValue] = useState(defaultValue);

  return (
    <div className="form-group m-1">
      <label
        className="col-form-label col-form-label-sm"
        forhtml="selectMedida"
      >
        Unidad de Medida
      </label>
      <select
        name="unidadMedida"
        id="selectMedida"
        className="form-control form-control-sm"
        value={value}
        ref={register}
        onChange={(e) => setValue(e.target.value)}
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
