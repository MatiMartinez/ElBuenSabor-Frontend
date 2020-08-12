import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { updateEstado } from "../../../../../API/ApiPedidos";

export default function OpcionesPendientes({ id, toggleReload }) {
  const [dropdownOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!dropdownOpen);
  }

  // Opciones para aprobar o cancelar pedido
  async function aprobarPedido() {
    await updateEstado("aprobar", id);
    toggleReload();
  }

  async function cancelarPedido() {
    await updateEstado("cancelar", id);
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
        <DropdownItem onClick={() => aprobarPedido()}>Aprobar</DropdownItem>
        <DropdownItem onClick={() => cancelarPedido()}>Cancelar</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}
