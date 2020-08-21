import React, { useState, useEffect } from "react";
import { getEmpleados } from "../../../../API/ApiUsuario";
import EmpleadoCard from "./EmpleadoCard";

import "./ListaEmpleados.css";

export default function ListaEmpleados({
  rolSeleccionado,
  reload,
  toggleReload,
}) {
  // State
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    async function cargarEmpleados() {
      const data = await getEmpleados();
      setEmpleados(data);
      toggleReload();
    }
    if (reload === true) {
      cargarEmpleados();
    }
    // eslint-disable-next-line
  }, [reload]);

  function TodosEmpleados() {
    return empleados.map((empleado, index) => (
      <div className="col-6 mb-3" key={index}>
        <EmpleadoCard empleado={empleado} toggleReload={toggleReload} />
      </div>
    ));
  }

  function EmpleadosFiltrados() {
    return empleados
      .filter(
        (empleado) =>
          empleado.roles.map((rol) => rol.nombreRol) === rolSeleccionado
      )
      .map((empleado, index) => (
        <div className="col-6 mb-3" key={index}>
          <EmpleadoCard empleado={empleado} toggleReload={toggleReload} />
        </div>
      ));
  }

  return (
    <div className="mt-3">
      <div className="row">
        {rolSeleccionado === "todos" ? (
          <TodosEmpleados />
        ) : (
          <EmpleadosFiltrados />
        )}
      </div>
    </div>
  );
}
