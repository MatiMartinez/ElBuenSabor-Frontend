import React, { useState, useEffect } from "react";
import { getInsumos, setBorradoInsumo } from "../../../../API/InsumosApi";

export default function TablaInsumos({ toggle }) {
  // state
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    const cargarInsumos = async () => {
      const data = await getInsumos();
      setInsumos(data);
    };
    cargarInsumos();
  }, []);

  // Metodos de insumos
  const borrarInsumo = async (id) => {
    await setBorradoInsumo(id);
    window.location.reload(true);
  };

  return (
    <table className="table div-shadow bg-white mt-3">
      <thead className="font-bold-700">
        <tr>
          <th>Insumo</th>
          <th>Stock actual</th>
          <th>Stock mínimo</th>
          <th>Stock máximo</th>
          <th>Medida</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {insumos.length !== 0 && (
        <tbody>
          {insumos.map((insumo) => (
            <tr key={insumo._id}>
              <th>{insumo.denominacion}</th>
              <td>{insumo.stockActual}</td>
              <td>{insumo.stockMinimo}</td>
              <td>{insumo.stockMaximo}</td>
              <td>{insumo.unidadMedida}</td>
              <td>{insumo.rubro.denominacion}</td>
              <td>
                <div className="d-flex align-items-center">
                  <button className="btn" onClick={() => toggle(insumo)}>
                    <i className="far fa-edit"></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => borrarInsumo(insumo._id)}
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
