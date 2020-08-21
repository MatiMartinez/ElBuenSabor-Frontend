import React, { useState, useEffect } from "react";
import { getPlatos } from "../../../../../API/ApiPlatos";
import PlatoCard from "../PlatoCard/PlatoCard";

export default function TablaPlatos({ toggle, toggleReload, reload }) {
  // state
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    async function cargarPlatos() {
      const data = await getPlatos();
      setPlatos(data);
    }
    if (reload === true) {
      cargarPlatos();
      toggleReload();
    }
    // eslint-disable-next-line
  }, [reload]);

  return (
    <div className="mt-3 d-flex">
      {platos.length !== 0 ? (
        <div className="row w-100">
          {platos.map((plato, index) => (
            <PlatoCard
              key={index}
              plato={plato}
              toggleReload={toggleReload}
              togglePlato={toggle}
            />
          ))}
        </div>
      ) : (
        <div className="container text-center text-muted mt-3 mb-3">
          <h3>No hay platos cargados</h3>
        </div>
      )}
    </div>
  );
}
