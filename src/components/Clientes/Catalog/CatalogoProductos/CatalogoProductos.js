import React, { useState, useEffect } from "react";

export default function CatalogoProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargarProductos() {
      const data = [];
      setProductos(data);
    }
    cargarProductos();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {productos.length !== 0 && productos.map((producto) => <div></div>)}
      </div>
    </div>
  );
}
