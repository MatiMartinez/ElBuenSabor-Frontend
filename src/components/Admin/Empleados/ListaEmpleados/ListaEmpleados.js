import React, { useState, useEffect } from "react";
import { getUsuarios } from "../../../../API/ApiUsuario";
import EmpleadoCard from "./EmpleadoCard";

import "./ListaEmpleados.css";
import EmpleadoData from "./EmpleadoData";

export default function ListaEmpleados({ rolSeleccionado }) {
  // State
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const cargarEmpleados = async () => {
      const data = await getUsuarios();
      setEmpleados(data);
    };
    cargarEmpleados();
  }, []);

  // Empleado seleccionado
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  function seleccionarEmpleado(empleado) {
    console.log(empleado);
    setEmpleadoSeleccionado(empleado);
  }

  function TodosEmpleados() {
    return empleados.map((empleado) => (
      <div
        className="div-click mb-2"
        onClick={() => seleccionarEmpleado(empleado)}
        key={empleado._id}
      >
        <EmpleadoCard empleado={empleado} />
      </div>
    ));
  }

  function EmpleadosFiltrados() {
    //Arreglar luego de asignar rol a empleado
    return empleados
      .filter((empleado) => empleado.roles.map() === rolSeleccionado)
      .map((empleado) => (
        <div
          className="div-click mb-2"
          onClick={() => seleccionarEmpleado(empleado)}
          key={empleado._id}
        >
          <EmpleadoCard empleado={empleado} />
        </div>
      ));
  }

  return (
    <div className="mt-3 row">
      {/** Lista de tarjetas de empleados */}
      <div className="col-8">
        {empleados.length !== 0 && rolSeleccionado === "todos" ? (
          <TodosEmpleados />
        ) : (
          <EmpleadosFiltrados />
        )}
      </div>
      {/** Estadisticas del empleado */}
      <div className="col-4">
        <EmpleadoData empleado={empleadoSeleccionado} />
      </div>
    </div>
  );
}
