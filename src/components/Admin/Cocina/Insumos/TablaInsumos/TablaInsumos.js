import React, { useState, useEffect } from "react";
import { getInsumos, setBorradoInsumo } from "../../../../../API/InsumosApi";
import BodyTablaInsumos from "./BodyTablaInsumos";

export default function TablaInsumos({
  toggle,
  reload,
  setReload,
  selectedCategory,
}) {
  // state
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    const cargarInsumos = async () => {
      const data = await getInsumos();
      setInsumos(data);
      setReload(false);
    };
    if (reload === true) {
      cargarInsumos();
    }
  }, [reload]);

  // Metodos de insumos
  const borrarInsumo = async (id) => {
    await setBorradoInsumo(id);
    setReload(true);
  };

  /** JSX -------------------------------------------------------------------------------- */
  return insumos.length !== 0 ? (
    <table className="table div-shadow bg-white mt-3">
      <thead className="bg-light">
        <tr>
          <th>Insumo</th>
          <th>Stock actual</th>
          <th>Stock mínimo</th>
          <th>Stock máximo</th>
          <th>Precio Compra</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {insumos.length !== 0 && (
        <tbody>
          {selectedCategory === "todos"
            ? insumos.map((insumo, index) => (
                <BodyTablaInsumos
                  insumo={insumo}
                  toggle={toggle}
                  borrarInsumo={borrarInsumo}
                  key={index}
                />
              ))
            : insumos
                .filter((insumo) => insumo.rubro._id === selectedCategory)
                .map((insumo, index) => (
                  <BodyTablaInsumos
                    insumo={insumo}
                    toggle={toggle}
                    borrarInsumo={borrarInsumo}
                    key={index}
                  />
                ))}
        </tbody>
      )}
    </table>
  ) : (
    <div className="container text-center text-muted mt-5 mb-5">
      <h3>No hay Insumos cargados</h3>
    </div>
  );
}
