import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
} from "reactstrap";

export default function NavCocina() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="d-flex justify-content-center nav-general-one">
      <Nav tabs>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Cocina
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem to="/cocina/platos" tag={RRNavLink}>
              Platos
            </DropdownItem>
            <DropdownItem to="/cocina/categorias" tag={RRNavLink}>
              Categorías
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink to="/cocina/pedidos" tag={RRNavLink}>
            Pedidos
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
