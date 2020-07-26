import React, { useState, useEffect } from "react";

//API
import { getRubros, getRubrosRaiz } from "../../API/ApiCategorias";

const SelectCategorias = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const cargarRubros = async () => {
      let data;
      if (props.raiz === true) {
        data = await getRubrosRaiz();
      } else {
        data = await getRubros();
      }
      setCategorias(data);
    };
    cargarRubros();
  }, [props.raiz]); // Verificar raiz

  return (
    <div className="form-group">
      {props.label === true && (
        <label htmlFor="selectCategoria" className="control-label">
          Categoría
        </label>
      )}
      <select
        name={props.name}
        id="selectCategoria"
        className="form-control"
        defaultValue={""}
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
