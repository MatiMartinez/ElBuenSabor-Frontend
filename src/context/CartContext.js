import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [platos, setPlatos] = useState([]);
  const [reventas, setReventas] = useState([]);
  const [itemsOnCart, setItemsOnCart] = useState(Number(0));
  const [subTotal, setSubTotal] = useState(Number(0));

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
        setSubTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
