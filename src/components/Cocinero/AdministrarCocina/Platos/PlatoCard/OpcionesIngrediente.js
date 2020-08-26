import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { softDeleteIngrediente } from "../../../../../API/ApiIngredientes";

export default function OpcionesIngrediente({
  ingrediente,
  toggleEdit,
  toggleReload,
}) {
  const [dropdownOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!dropdownOpen);
  }

  async function borrarIngrediente() {
    await softDeleteIngrediente(ingrediente._id);
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
        <DropdownItem onClick={() => toggleEdit(ingrediente)}>
          Editar
        </DropdownItem>
        <DropdownItem onClick={() => borrarIngrediente()}>Quitar</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}
