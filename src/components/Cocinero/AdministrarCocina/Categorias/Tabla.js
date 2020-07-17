import React from "react";

export default function Tabla({ rubros, toggle, borrarRubro }) {
  return (
    <table className="table bg-white mt-3">
      <thead className="font-bold-700">
        <tr>
          <th>Denominación</th>
          <th>Rubro padre</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {rubros.length !== 0 && (
        <tbody>
          {rubros.map((rubro) => (
            <tr key={rubro._id}>
              <th>{rubro.denominacion}</th>
              <th>
                {rubro.rubroPadre === null
                  ? "-"
                  : rubros.rubroPadre.denominacion}
              </th>
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
