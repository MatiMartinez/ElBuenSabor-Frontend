import React, { useState, useEffect } from "react";

//API
import {
  getRubros,
  getRubrosInsumo,
  getRubrosCatalogo,
} from "../../API/ApiCategorias";

const SelectCategorias = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function cargarRubros() {
      let data;
      if (props.tipo === "insumos") {
        data = await getRubrosInsumo();
      } else if (props.tipo === "catalogo") {
        data = await getRubrosCatalogo();
      } else {
        data = await getRubros();
      }
      setCategorias(data);
    }
    cargarRubros();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="form-group m-1">
      {props.label === true && (
        <label
          htmlFor="selectCategoria"
          className="col-form-label col-form-label-sm"
        >
          Categoría
        </label>
      )}
      <select
        name={props.name}
        id="selectCategoria"
        className="form-control form-control-sm"
        ref={props.register}
        defaultValue={props.defaultValue}
      >
        <option hidden disabled value="">
          Seleccione una categoría
        </option>
        {/** True para mostrar la opcion de sin categoria */}
        {props.sinRubro === true && (
          <option key="0" value="">
            Sin Categoría
          </option>
        )}
        {/** True para mostrar la opcion de todas las categorias */}
        {props.allValue === true && (
          <option key="0" value="todos">
            Todos
          </option>
        )}
        {categorias.map((categoria) => (
          <option key={categoria._id} value={categoria._id}>
            {categoria.denominacion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategorias;
