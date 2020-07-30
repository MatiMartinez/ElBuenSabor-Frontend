import React, { useState, useEffect } from "react";
import SelectInsumos from "../../../../../GlobalReusable/SelectInsumos";
import { getRubrosInsumo } from "../../../../../../API/ApiCategorias";

export default function FormIngrediente({
  ingrediente,
  index,
  handleChange,
  removeIngrediente,
}) {
  const [value, setValue] = useState("");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const cargarRubros = async () => {
      const data = await getRubrosInsumo();
      setCategorias(data);
    };
    cargarRubros();
  }, []);

  return (
    <div className="p-2 d-flex justify-content-around">
      {/** Select de categoria */}
      <div className="form-group" style={{ width: "30%" }}>
        <select
          name="rubro"
          id="selectCategoria"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option hidden disabled value="">
            Categoría
          </option>
          {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria._id}>
              {categoria.denominacion}
            </option>
          ))}
        </select>
      </div>
      {/** Select de insumo */}
      <SelectInsumos
        value={ingrediente.insumo}
        handleChange={handleChange}
        index={index}
      />
      <div className="form-group" style={{ width: "30%" }}>
        <input
          name="cantidad"
          placeholder="Cantidad"
          value={ingrediente.cantidad}
          onChange={(e) => handleChange(index, e)}
          type="number"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button
          className="btn from-control"
          type="button"
          onClick={() => removeIngrediente(index)}
        >
          <i className="fas fa-minus-circle"></i>
        </button>
      </div>
    </div>
  );
}
