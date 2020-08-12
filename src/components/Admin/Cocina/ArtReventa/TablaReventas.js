import React, { useState, useEffect } from "react";
import { getReventas, setBorradoReventa } from "../../../../API/ArtReventaApi";
import BodyTablaReventas from "./BodyTablaReventas";

export default function TablaReventas({
  toggle,
  reload,
  setReload,
  selectedCategory,
}) {
  // Tabla
  const [reventas, setReventas] = useState([]);

  useEffect(() => {
    const cargarReventas = async () => {
      const data = await getReventas();
      setReventas(data);
      setReload(false);
    };
    if (reload === true) {
      cargarReventas();
    }
    // eslint-disable-next-line
  }, [reload]);

  // Metodos de articulos de reventa
  const borrarReventa = async (id) => {
    await setBorradoReventa(id);
    setReload(true);
  };

  return reventas.length !== 0 ? (
    <table className="table div-shadow bg-white mt-3">
      <thead className="bg-light">
        <tr>
          <th>Imagen</th>
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
      <tbody>
        {selectedCategory === "todos"
          ? reventas.map((reventa, index) => (
              <BodyTablaReventas
                reventa={reventa}
                toggle={toggle}
                borrarReventa={borrarReventa}
                key={index}
              />
            ))
          : reventas
              .filter((reventa) => reventa.rubro._id === selectedCategory)
              .map((reventa, index) => (
                <BodyTablaReventas
                  reventa={reventa}
                  toggle={toggle}
                  borrarReventa={borrarReventa}
                  key={index}
                />
              ))}
      </tbody>
    </table>
  ) : (
    <div className="container text-center text-muted mt-5 mb-5">
      <h3>No hay Artículos de reventa cargados</h3>
    </div>
  );
}
