import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { updateEstado } from "../../../../../API/ApiPedidos";

export default function OpcionesPreparados({ id, toggleReload, delivery }) {
  const [dropdownOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!dropdownOpen);
  }

  // Opciones para entregar o enviar por delivery pedido
  async function entregarPedido() {
    await updateEstado("entregar", id);
    toggleReload();
  }

  async function enviarPedido() {
    await updateEstado("enviar", id);
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
        {delivery === true ? (
          <DropdownItem onClick={() => enviarPedido()}>Enviar</DropdownItem>
        ) : (
          <DropdownItem onClick={() => entregarPedido()}>Entregar</DropdownItem>
        )}
      </DropdownMenu>
    </ButtonDropdown>
  );
}
