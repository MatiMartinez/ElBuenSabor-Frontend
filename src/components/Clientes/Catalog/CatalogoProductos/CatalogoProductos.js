import React, { useState, useEffect } from "react";
import ProductoCard from "./ProductoCard";
import { getPlatosPorRubro } from "../../../../API/ApiPlatos";
import ModalProducto from "./ModalProducto";

export default function CatalogoProductos({ selectedCategory }) {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  useEffect(() => {
    async function cargarProductos() {
      const data = await getPlatosPorRubro(selectedCategory);
      setProductos(data);
    }
    if (selectedCategory !== "") {
      cargarProductos();
    } else {
      // Ruta para mostrar los productos por defecto, el admin puede indicar cuales son.
    }
  }, [selectedCategory]);

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
      <h4>Productos</h4>
      <div className="row mt-3">
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
