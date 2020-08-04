import React, { useState, useEffect } from "react";
import { getRubros, setBorradoRubro } from "../../../../API/ApiCategorias";

export default function TablaCategorias({ toggle }) {
  // State
  const [rubros, setRubros] = useState([]);

  useEffect(() => {
    const cargarRubros = async () => {
      const data = await getRubros();
      setRubros(data);
    };
    cargarRubros();
  }, []);

  // Metodos de Categorias
  const borrarRubro = async (id) => {
    await setBorradoRubro(id, true);
    window.location.reload(true);
  };

  return (
    <table className="table div-shadow bg-white mt-3">
      <thead className="font-bold-700">
        <tr>
          <th>Denominación</th>
          <th>Categoría de insumo</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {rubros.length !== 0 && (
        <tbody>
          {rubros.map((rubro) => (
            <tr key={rubro._id}>
              <th>{rubro.denominacion}</th>
              <td>{rubro.esRubroInsumo ? "Si" : "No"}</td>
              <td>
                {rubro.rubroPadre === null
                  ? "-"
                  : rubro.rubroPadre.denominacion}
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <button className="btn" onClick={() => toggle(rubro)}>
                    <i className="far fa-edit"></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => borrarRubro(rubro._id)}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
