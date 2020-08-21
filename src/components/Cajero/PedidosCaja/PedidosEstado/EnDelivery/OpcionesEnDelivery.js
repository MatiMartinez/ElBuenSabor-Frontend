import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { updateEstado } from "../../../../../API/ApiPedidos";

export default function OpcionesEnDelivery({ id, toggleReload }) {
  const [dropdownOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!dropdownOpen);
  }

  // Opciones para reportar entrega del pedido por delivery
  async function entregarPedido() {
    await updateEstado("entregar", id);
    toggleReload();
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
        <DropdownItem header>Opciones</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => entregarPedido()}>Entregar</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}
