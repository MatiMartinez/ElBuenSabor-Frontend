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

export default function NavAdmin() {
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
            <DropdownItem to="/admin/cocina/insumos" tag={RRNavLink}>
              Insumos
            </DropdownItem>
            <DropdownItem to="/admin/cocina/platos" tag={RRNavLink}>
              Platos
            </DropdownItem>
            <DropdownItem to="/admin/cocina/categorias" tag={RRNavLink}>
              Categorías
            </DropdownItem>
            <DropdownItem to="/admin/cocina/articulos-reventa" tag={RRNavLink}>
              Artículos de reventa
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink to="/admin/empleados" tag={RRNavLink}>
            Empleados
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin/reportes" tag={RRNavLink}>
            Reportes
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
