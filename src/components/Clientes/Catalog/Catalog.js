import React, { useState } from "react";

// Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Catalog.css";
import Buscador from "./HeroCatalog/Buscador";
import SliderCategorias from "./SliderCategorias/SliderCategorias";
import Hero from "./HeroCatalog/HeroCatalog";
import CatalogoProductos from "./CatalogoProductos/CatalogoProductos";
import ModalCarrito from "./Carrito/ModalCarrito";
import { useCart } from "../../../context/CartContext";
import { getPlatos } from "../../../API/ApiPlatos";
import { getReventas } from "../../../API/ArtReventaApi";

const Catalog = () => {
  const { itemsOnCart } = useCart();

  // Busqueda, form y estado de la busqueda
  const [busqueda, setBusqueda] = useState(null);
  const [productos, setProductos] = useState({ platos: [], reventas: [] });
  const [selectedCategory, setSelectedCategory] = useState("");

  function onSubmitBusqueda(e) {
    e.preventDefault();
    console.log(busqueda);
    getProductos();
  }

  async function getProductos() {
    const dataPlatos = await getPlatos();
    const dataReventas = await getReventas();
    console.log(dataPlatos);
    console.log(dataReventas);
  }

  function onChange(e) {
    e.preventDefault();
    setBusqueda(e.target.value);
  }

  // Carrito de compras
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {/** Hero */}
      <Hero>
        <form onSubmit={onSubmitBusqueda} className="buscador-content">
          <Buscador onChange={onChange} />
        </form>
      </Hero>
      {/** Categorías */}
      <SliderCategorias setSelectedCategory={setSelectedCategory} />
      {/** Separador */}
      <hr className="container mb-4" />
      {/** Catalogo de productos */}
      <CatalogoProductos selectedCategory={selectedCategory} />
      {/** Modal del carrito de compras */}
      <ModalCarrito isOpen={isOpen} toggle={toggle} />
      {/** Boton siempre flotante del carrito */}
      <button className="btn btn-carrito" onClick={() => toggle()}>
        <i className="fas fa-shopping-cart mr-1"></i>
        <small className="p-0 m-0">{itemsOnCart}</small>
      </button>
    </div>
  );
};

export default Catalog;
