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
  const [busqueda, setBusqueda] = useState("");
  const [platos, setPlatos] = useState([]);
  const [reventas, setReventas] = useState([]);
  const [productos, setProductos] = useState({ platos: [], reventas: [] });
  const [selectedCategory, setSelectedCategory] = useState("");

  function onSubmitBusqueda(e) {
    e.preventDefault();
    console.log(busqueda);
    getProductos();
  }

  async function getProductos() {
    if (platos.length === 0 && reventas.length === 0) {
      const dataPlatos = await getPlatos();
      setPlatos(dataPlatos);
      const dataReventas = await getReventas();
      setReventas(dataReventas);
    }
    const platosFilter = platos.filter((plato) => {
      if (
        plato.denominacion.includes(busqueda) ||
        plato.denominacion.toLowerCase().includes(busqueda)
      ) {
        return plato;
      }
    });
    const reventasFilter = reventas.filter((reventa) => {
      if (
        reventa.denominacion.includes(busqueda) ||
        reventa.denominacion.toLowerCase().includes(busqueda)
      ) {
        return reventa;
      }
    });
    console.log(platosFilter);
    console.log(reventasFilter);
    setProductos({
      ...productos,
      platos: platosFilter,
      reventas: reventasFilter,
    });
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
      <CatalogoProductos
        selectedCategory={selectedCategory}
        busqueda={productos}
      />
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
