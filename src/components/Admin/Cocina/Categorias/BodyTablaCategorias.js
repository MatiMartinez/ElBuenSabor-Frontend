import React from "react";

export default function BodyTablaCategorias({ rubro, toggle, borrarRubro }) {
  return (
    <tr>
      <td>
        {rubro.imagenPath !== "" && (
          <div
            style={{
              backgroundImage: `url(${rubro.imagenPath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "75px",
              height: "75px",
            }}
          ></div>
        )}
      </td>
      <th>{rubro.denominacion}</th>
      <td>{rubro.esRubroInsumo ? "Si" : "No"}</td>
      <td>{rubro.rubroPadre === null ? "-" : rubro.rubroPadre.denominacion}</td>
      <td>
        <div className="d-flex align-items-center">
          <button className="btn" onClick={() => toggle(rubro)}>
            <i className="far fa-edit"></i>
          </button>
          <button className="btn" onClick={() => borrarRubro(rubro._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
