import React, { useState, useEffect } from "react";
import {
  getRubrosInsumo,
  getRubros,
  getRubrosCatalogo,
} from "../../API/ApiCategorias";

export default function SelectCategoria({
  value,
  onChange,
  required,
  tipo,
  name,
}) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function cargarCategoriasInsumos() {
      const data = await getRubrosInsumo();
      setCategorias(data);
    }
    async function cargarCategorias() {
      const data = await getRubros();
      setCategorias(data);
    }
    async function cargarCategoriasCatalogo() {
      const data = await getRubrosCatalogo();
      setCategorias(data);
    }
    if (tipo === "insumo") {
      cargarCategoriasInsumos();
    } else if (tipo === "todos") {
      cargarCategorias();
    } else if (tipo === "catalogo") {
      cargarCategoriasCatalogo();
    }
  }, []); // eslint-disable-line

  return (
    <div className="form-group w-100 m-1">
      <label
        htmlFor="selectCategoria"
        className="col-form-label col-form-label-sm"
      >
        Categoria
      </label>
      <select
        name={name}
        id="selectCategoria"
        className="form-control form-control-sm"
        value={value}
        onChange={onChange}
        required={required}
      >
        <option hidden disabled value="">
          Selecciona
        </option>
        {categorias.length !== 0 &&
          categorias.map((categoria, index) => (
            <option key={index} value={categoria._id}>
              {categoria.denominacion}
            </option>
          ))}
      </select>
    </div>
  );
}
