import React, { useState } from "react";

import Cocina from "../../components/Admin/Cocina/Cocina";
import Empleados from "../../components/Admin/Empleados/Empleados";
import Estadisticas from "../../components/Admin/Estadisticas/Estadisticas";
import NavAdmin from "./NavAdmin";

const Admin = () => {
  const [toggle, setToggle] = useState(0);

  const changeToggle = (number) => {
    setToggle(number);
  };

  return (
    <div className="admin-view">
      {/** Nav Admin */}
      <NavAdmin changeToggle={changeToggle} />
      {/** Content Admin */}
      {toggle === 0 && <Cocina />}
      {toggle === 1 && <Empleados />}
      {toggle === 2 && <Estadisticas />}
    </div>
  );
};

export default Admin;
