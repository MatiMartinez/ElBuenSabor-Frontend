import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { setBorradoPlato } from "../../../../../API/ApiPlatos";

export default function OpcionesPlato({ togglePlato, plato, toggleReload }) {
  const [dropdownOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!dropdownOpen);
  }

  async function borrarPlato() {
    await setBorradoPlato(plato._id);
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
        <DropdownItem onClick={() => togglePlato(plato)}>Editar</DropdownItem>
        <DropdownItem onClick={() => borrarPlato()}>Borrar</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}
