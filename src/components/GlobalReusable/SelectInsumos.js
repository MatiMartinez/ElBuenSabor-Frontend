import React, { useState, useEffect } from "react";
import { getInsumosPorRubro } from "../../API/InsumosApi";

export default function SelectInsumos({ value, handleChange, index, rubroId }) {
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    async function cargarInsumos() {
      const data = await getInsumosPorRubro(rubroId);
      console.log(data);
      setInsumos(data);
    }
    if (rubroId !== "") {
      cargarInsumos();
    }
  }, [rubroId]);

  return (
    <div className="form-group" style={{ width: "30%" }}>
      <select
        name="insumo_id"
        id="selectInsumos"
        className="form-control"
        value={value}
        onChange={(e) => handleChange(index, e)}
      >
        <option hidden disabled value="">
          Insumo
        </option>
        {insumos.length !== 0 &&
          insumos.map((insumo) => (
            <option key={insumo._id} value={insumo._id}>
              {insumo.denominacion}
            </option>
          ))}
      </select>
    </div>
  );
}
