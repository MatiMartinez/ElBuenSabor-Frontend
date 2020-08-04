import React from "react";

export default function BodyTablaReventas({ reventa, toggle, borrarReventa }) {
  return (
    <tr key={reventa._id} className="asdd">
      <td>
        <div
          style={{
            backgroundImage: `url(${reventa.imagenPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "75px",
            height: "75px",
          }}
        ></div>
      </td>
      <th>{reventa.denominacion}</th>
      <td>$ {reventa.precioCompra}</td>
      <td>$ {reventa.precioVenta}</td>
      <td>{reventa.unidadMedida}</td>
      <td>{reventa.stockActual}</td>
      <td>{reventa.stockMinimo}</td>
      <td>{reventa.stockMaximo}</td>
      <td>{reventa.rubro.denominacion}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn" onClick={() => toggle(reventa)}>
            <i className="far fa-edit"></i>
          </button>
          <button className="btn" onClick={() => borrarReventa(reventa._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
