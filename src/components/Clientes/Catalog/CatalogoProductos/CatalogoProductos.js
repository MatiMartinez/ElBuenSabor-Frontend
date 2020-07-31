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
    setIsOpen(!isOpen);
  }

  function addCarrito(data) {
    console.log(data);
  }

  // Modal de producto
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="row">
        {productos.length !== 0 &&
          productos.map((producto) => (
            <div className="col-6" key={producto._id}>
              <ProductoCard
                producto={producto}
                seleccionarProducto={seleccionarProducto}
              />
            </div>
          ))}
      </div>
      <ModalProducto
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        producto={productoSeleccionado}
        addCarrito={addCarrito}
      />
    </div>
  );
}
