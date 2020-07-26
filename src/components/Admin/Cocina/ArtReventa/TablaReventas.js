import React, { useState, useEffect } from "react";
import { getReventas, setBorradoReventa } from "../../../../API/ArtReventaApi";

export default function TablaReventas({ selectCategoria, toggle }) {
  // Tabla
  const [reventas, setReventas] = useState([]);

  useEffect(() => {
    const cargarReventas = async () => {
      const data = await getReventas();
      setReventas(data);
      console.log(data);
    };
    cargarReventas();
  }, []);

  // Metodos de articulos de reventa
  const borrarReventa = async (id) => {
    await setBorradoReventa(id);
    window.location.reload(true);
  };

  return (
    <table className="table div-shadow bg-white mt-3">
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
                  <td>{reventa.rubro.denominacion}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn" onClick={() => toggle(reventa)}>
                        <i className="far fa-edit"></i>
                      </button>
                      <button
                        className="btn"
                        onClick={() => borrarReventa(reventa._id)}
                      >
                        <i className="far fa-trash-alt"></i>
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
                    <td>{reventa.rubro.denominacion}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button className="btn" onClick={() => toggle(reventa)}>
                          <i className="far fa-edit"></i>
                        </button>
                        <button
                          className="btn"
                          onClick={() => borrarReventa(reventa._id)}
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
