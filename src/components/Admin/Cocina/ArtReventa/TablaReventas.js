import React, { useState, useEffect } from "react";
import { getReventas, setBorradoReventa } from "../../../../API/ArtReventaApi";
import BodyTablaReventas from "./BodyTablaReventas";

export default function TablaReventas(props) {
  // Tabla
  const [reventas, setReventas] = useState([]);

  useEffect(() => {
    const cargarReventas = async () => {
      const data = await getReventas();
      setReventas(data);
      props.setReload(false);
    };
    if (props.reload === true) {
      cargarReventas();
    }
  }, [props.reload]);

  // Metodos de articulos de reventa
  const borrarReventa = async (id) => {
    await setBorradoReventa(id);
    props.setReload(true);
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
        {props.selectedCategory === "todos"
          ? reventas.map((reventa) => (
              <BodyTablaReventas
                reventa={reventa}
                toggle={props.toggle}
                borrarReventa={borrarReventa}
              />
            ))
          : reventas
              .filter((reventa) => reventa.rubro._id === props.selectedCategory)
              .map((reventa) => (
                <BodyTablaReventas
                  reventa={reventa}
                  toggle={props.toggle}
                  borrarReventa={borrarReventa}
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
