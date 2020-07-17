import React from "react";

import TrashIcon from "../../../../assets/trash-icon.svg";
import EditIcon from "../../../../assets/edit-icon.svg";

export default function Tabla({
  reventas,
  selectCategoria,
  toggle,
  borrarReventa,
}) {
  return (
    <table className="table bg-white mt-3">
      <thead className="font-bold-700">
        <tr>
          <th>Denominación</th>
          <th>Precio de compra</th>
          <th>Precio de venta</th>
          <th>Medida</th>
          <th>Stock actual</th>
          <th>Stock mínimo</th>
          <th>Stock máximo</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {reventas.length !== 0 && (
        <tbody className="font-regular">
          {selectCategoria === "" || selectCategoria === "todos"
            ? reventas.map((reventa) => (
                <tr key={reventa._id}>
                  <th>{reventa.denominacion}</th>
                  <td>{reventa.precioCompra}</td>
                  <td>{reventa.precioVenta}</td>
                  <td>{reventa.unidadMedida}</td>
                  <td>{reventa.stockActual}</td>
                  <td>{reventa.stockMinimo}</td>
                  <td>{reventa.stockMaximo}</td>
                  <td>{reventa.rubro}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn" onClick={() => toggle(reventa)}>
                        <img src={EditIcon} alt="edit-icon" width="25px" />
                      </button>
                      <button
                        className="btn"
                        onClick={() => borrarReventa(reventa._id)}
                      >
                        <img src={TrashIcon} alt="trash-icon" width="25px" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : reventas
                .filter((reventa) => reventa.rubro === selectCategoria)
                .map((reventa) => (
                  <tr key={reventa._id}>
                    <th>{reventa.denominacion}</th>
                    <td>{reventa.precioCompra}</td>
                    <td>{reventa.precioVenta}</td>
                    <td>{reventa.unidadMedida}</td>
                    <td>{reventa.stockActual}</td>
                    <td>{reventa.stockMinimo}</td>
                    <td>{reventa.stockMaximo}</td>
                    <td>{reventa.rubro}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button className="btn" onClick={() => toggle(reventa)}>
                          <img src={EditIcon} alt="edit-icon" width="25px" />
                        </button>
                        <button
                          className="btn"
                          onClick={() => borrarReventa(reventa._id)}
                        >
                          <img src={TrashIcon} alt="trash-icon" width="25px" />
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
