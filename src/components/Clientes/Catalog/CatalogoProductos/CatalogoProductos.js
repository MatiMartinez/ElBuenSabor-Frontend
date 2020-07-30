import React, { useState, useEffect } from "react";
import ProductoCard from "./ProductoCard";
import { getPlatos } from "../../../../API/ApiPlatos";

export default function CatalogoProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargarProductos() {
      const data = await getPlatos();
      setProductos(data);
    }
    cargarProductos();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {productos.length !== 0 &&
          productos.map((producto) => (
            <div>
              <ProductoCard producto={producto} />
            </div>
          ))}
      </div>
    </div>
  );
}
