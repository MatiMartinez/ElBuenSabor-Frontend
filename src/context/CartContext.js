import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [platos, setPlatos] = useState([]);
  const [reventas, setReventas] = useState([]);
  const [itemsOnCart, setItemsOnCart] = useState(Number(0));
  const subTotal = calcularSubTotal();

  function calcularSubTotal() {
    let total = Number(0);
    platos.forEach((plato) => {
      total += Number(plato.item.precioVenta) * Number(plato.cantidad);
    });
    reventas.forEach((reventa) => {
      total += Number(reventa.item.precioVenta) * Number(reventa.cantidad);
    });
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        platos,
        setPlatos,
        reventas,
        setReventas,
        itemsOnCart,
        setItemsOnCart,
        subTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
