import React, { useState, useEffect } from "react";
import { getInsumos } from "../../API/InsumosApi";

export default function SelectInsumos({ value, handleChange, index }) {
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    async function cargarInsumos() {
      const data = await getInsumos();
      setInsumos(data);
      console.log(data);
    }
    cargarInsumos();
  }, []);

  return (
    <div className="form-group" style={{ width: "30%" }}>
      <select
        name="insumo"
        id="selectInsumos"
        className="form-control"
        value={value}
        onChange={(e) => handleChange(index, e)}
      >
        <option hidden disabled value="">
          Insumo
        </option>
        {insumos.map((insumo) => (
          <option key={insumo._id} value={insumo._id}>
            {insumo.denominacion}
          </option>
        ))}
      </select>
    </div>
  );
}
