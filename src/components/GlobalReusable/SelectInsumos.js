import React, { useState, useEffect } from "react";
import { getInsumosPorRubro } from "../../API/InsumosApi";

export default function SelectInsumos({ rubroId, value, onChange, required }) {
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    async function cargarInsumos() {
      const data = await getInsumosPorRubro(rubroId);
      setInsumos(data);
    }
    if (rubroId !== "") {
      cargarInsumos();
    }
  }, [rubroId]);

  return (
    <div className="form-group w-100 m-1">
      <label
        htmlFor="selectInsumos"
        className="col-form-label col-form-label-sm"
      >
        Insumo
      </label>
      <select
        name="insumo_id"
        id="selectInsumos"
        className="form-control form-control-sm"
        value={value}
        onChange={onChange}
        required={required}
      >
        <option hidden disabled value="">
          Selecciona
        </option>
        {insumos.length !== 0 &&
          insumos.map((insumo, index) => (
            <option key={index} value={insumo._id}>
              {insumo.denominacion}
            </option>
          ))}
      </select>
    </div>
  );
}
