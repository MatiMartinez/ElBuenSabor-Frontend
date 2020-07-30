import React, { useState, useEffect } from "react";
import { getPlatos, setBorradoPlato } from "../../../../../API/ApiPlatos";
import PlatoCard from "./PlatoCard";

import "./TablaPlatos.css";
import InfoPlato from "./InfoPlato/InfoPlato";

export default function TablaPlatos({ toggle }) {
  // state
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    async function cargarPlatos() {
      const data = await getPlatos();
      setPlatos(data);
    }
    cargarPlatos();
  }, []);

  // Seleccionar plato para agregar, editar o borrar ingredientes
  const [platoSeleccionado, setPlatoSeleccionado] = useState("");

  function seleccionarPlato(plato) {
    setPlatoSeleccionado(plato);
  }

  return (
    <div className="mt-3 d-flex">
      <div className="row">
        {/** Lista de platos */}
        <div className="col-8">
          <div className="row">
            {platos.length !== 0 &&
              platos.map((plato) => (
                <div
                  className="col-3 mb-4 plato-card"
                  key={plato._id}
                  onClick={() => seleccionarPlato(plato)}
                >
                  <PlatoCard plato={plato} toggle={toggle} />
                </div>
              ))}
          </div>
        </div>
        {/** Informacion del plato */}
        <div className="col-4 info-plato">
          <h4>Información de Plato</h4>
          <h5>{platoSeleccionado.denominacion}</h5>
          {platoSeleccionado !== "" && <InfoPlato plato={platoSeleccionado} />}
        </div>
      </div>
    </div>
  );
}
