import React, { useState, useEffect } from "react";

//API
import { getRubros, getRubrosInsumo } from "../../API/ApiCategorias";

const SelectCategorias = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const cargarRubros = async () => {
      let data;
      if (props.tipo === "insumos") {
        data = await getRubrosInsumo();
      } else {
        data = await getRubros();
      }
      setCategorias(data);
    };
    cargarRubros();
  }, [props.tipo]);

  // OnChange
  const [value, setValue] = useState(props.defaultValue);

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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={props.register}
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
