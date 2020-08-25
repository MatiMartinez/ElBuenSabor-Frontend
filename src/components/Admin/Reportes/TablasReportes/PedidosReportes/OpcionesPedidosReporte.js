import React, { useState, useEffect } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  getPedidosUsuario,
  facturarPedido,
} from "../../../../../API/ApiPedidos";

export default function OpcionesPedidosReporte({ userId }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function getPedidos() {
      const data = await getPedidosUsuario(userId);
      setPedidos(data);
      console.log(data);
    }
    getPedidos();
  }, []); //eslint-disable-line

  const [dropdownOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!dropdownOpen);
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="left">
      <DropdownToggle
        style={{
          backgroundColor: "transparent",
          color: "#555",
          border: "none",
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Pedidos</DropdownItem>
        <DropdownItem divider />
        {pedidos.length !== 0 &&
          pedidos.map((pedido, index) => (
            <DropdownItem
              key={index}
              className="d-flex justify-content-between align-items-center"
              onClick={() => facturarPedido(pedido._id)}
            >
              <p className="m-0">{index}</p>
              <button className="btn btn-info m-0">
                <i className="fas fa-file-download"></i>
              </button>
            </DropdownItem>
          ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
}
