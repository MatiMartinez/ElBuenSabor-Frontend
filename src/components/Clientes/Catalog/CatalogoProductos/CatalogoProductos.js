import React, { useState, useEffect } from "react";
import ProductoCard from "./ProductoCard";
import { getPlatos } from "../../../../API/ApiPlatos";
import ModalProducto from "./ModalProducto";

export default function CatalogoProductos() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  useEffect(() => {
    async function cargarProductos() {
      const data = await getPlatos();
      setProductos(data);
    }
    cargarProductos();
  }, []);

  function seleccionarProducto(data) {
    setProductoSeleccionado(data);
    toggle();
  }

  // Modal de producto
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <div className="row">
        {productos.length !== 0 &&
          productos.map((producto, index) => (
            <div className="col-6" key={index}>
              <ProductoCard
                producto={producto}
                seleccionarProducto={seleccionarProducto}
              />
            </div>
          ))}
      </div>
      <ModalProducto
        isOpen={isOpen}
        toggle={toggle}
        producto={productoSeleccionado}
      />
    </div>
  );
}
