import React, { useState, useEffect } from "react";
import { getUsuarios } from "../../../../API/ApiUsuario";
import EmpleadoCard from "./EmpleadoCard";

import "./ListaEmpleados.css";
import EmpleadoData from "./EmpleadoData";
import { setBorradoRol } from "../../../../API/ApiRoles";

export default function ListaEmpleados({ rolSeleccionado, reload, setReload }) {
  // State
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const cargarEmpleados = async () => {
      const data = await getUsuarios();
      setEmpleados(data);
      setReload(false);
    };
    if (reload === true) {
      cargarEmpleados();
    }
  }, [reload]);

  // Empleado seleccionado
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  function seleccionarEmpleado(empleado) {
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

  // Quitar rol a empleado
  async function quitarRol(id) {
    await setBorradoRol(id);
    setReload(true);
  }

  return (
    <div className="mt-3 row">
      {/** Lista de tarjetas de empleados */}
      <div className="col-6">
        {empleados.length !== 0 && rolSeleccionado === "todos" ? (
          <TodosEmpleados />
        ) : (
          <EmpleadosFiltrados />
        )}
      </div>
      {/** Estadisticas del empleado */}
      <div className="col-6">
        <EmpleadoData empleado={empleadoSeleccionado} quitarRol={quitarRol} />
      </div>
    </div>
  );
}
