import React from "react";

export default function BodyTablaInsumos({ insumo, toggle, borrarInsumo }) {
  return (
    <tr>
      <th>{insumo.denominacion}</th>
      <td>
        {insumo.stockActual} {insumo.unidadMedida}
      </td>
      <td>
        {insumo.stockMinimo} {insumo.unidadMedida}
      </td>
      <td>
        {insumo.stockMaximo} {insumo.unidadMedida}
      </td>
      <td>$ {insumo.precioCompra}</td>
      <td>{insumo.rubro.denominacion}</td>
      <td>
        <div className="d-flex align-items-center">
          <button className="btn" onClick={() => toggle(insumo)}>
            <i className="far fa-edit"></i>
          </button>
          <button className="btn" onClick={() => borrarInsumo(insumo._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
