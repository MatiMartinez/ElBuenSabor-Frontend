import React, { useState, useEffect } from "react";
import ProductoCard from "./ProductoCard";
import { getPlatosPorRubro } from "../../../../API/ApiPlatos";
import ModalProducto from "./ModalProducto";
import { getReventasPorRubro } from "../../../../API/ArtReventaApi";
import ReventasCard from "./ReventasCatalogo/ReventasCard";

export default function CatalogoProductos({ selectedCategory }) {
  const [productos, setProductos] = useState([]);
  const [reventas, setReventas] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState({});
  const [tipo, setTipo] = useState(false); // False es reventa y true plato

  useEffect(() => {
    async function cargarProductos() {
      const dataProductos = await getPlatosPorRubro(selectedCategory);
      setProductos(dataProductos);
      const dataReventas = await getReventasPorRubro(selectedCategory);
      setReventas(dataReventas);
    }
    if (selectedCategory !== "") {
      cargarProductos();
    } else {
      // Ruta para mostrar los productos por defecto, el admin puede indicar cuales son.
    }
  }, [selectedCategory]);

  function seleccionarProducto(data, tipo) {
    setProductoSeleccionado(data);
    setTipo(tipo);
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
            <div className="col-6 col-md-6" key={index}>
              <ProductoCard
                producto={producto}
                seleccionarProducto={seleccionarProducto}
              />
            </div>
          ))}
        {reventas.length !== 0 &&
          reventas.map((reventa, index) => (
            <div className="col-6 col-md-6" key={index}>
              <ReventasCard
                producto={reventa}
                seleccionarProducto={seleccionarProducto}
              />
            </div>
          ))}
      </div>
      <ModalProducto
        isOpen={isOpen}
        toggle={toggle}
        producto={productoSeleccionado}
        tipo={tipo}
      />
    </div>
  );
}
