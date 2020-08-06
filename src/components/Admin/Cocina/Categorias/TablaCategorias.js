import React, { useState, useEffect } from "react";
import { getRubros, setBorradoRubro } from "../../../../API/ApiCategorias";
import BodyTablaCategorias from "./BodyTablaCategorias";

export default function TablaCategorias({
  toggle,
  reload,
  setReload,
  selectedCategory,
}) {
  // State
  const [rubros, setRubros] = useState([]);

  useEffect(() => {
    const cargarRubros = async () => {
      const data = await getRubros();
      setRubros(data);
      setReload(false);
    };
    if (reload === true) {
      cargarRubros();
    }
  }, [reload]);

  // Metodos de Categorias
  const borrarRubro = async (id) => {
    await setBorradoRubro(id, true);
    setReload(true);
  };

  return rubros.length !== 0 ? (
    <table className="table div-shadow bg-white mt-3">
      <thead className="bg-light">
        <tr>
          <th>Imagen</th>
          <th>Denominación</th>
          <th>Categoría de insumo</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {rubros.map((rubro, index) => (
          <BodyTablaCategorias
            key={index}
            rubro={rubro}
            toggle={toggle}
            borrarRubro={borrarRubro}
          />
        ))}
      </tbody>
    </table>
  ) : (
    <div className="container text-center text-muted mt-5 mb-5">
      <h3>No hay Categorías cargadas</h3>
    </div>
  );
}
