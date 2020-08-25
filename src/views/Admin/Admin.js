import React from "react";

import Cocina from "../../components/Admin/Cocina/Cocina";
import Empleados from "../../components/Admin/Empleados/Empleados";
import NavAdmin from "./NavAdmin";
import PrivateRoute from "../../routes/PrivateRoute";
import Reportes from "../../components/Admin/Reportes/Reportes";

const Admin = () => {
  return (
    <div className="admin-view">
      {/** Nav Admin */}
      <NavAdmin />
      {/** Content Admin */}
      <PrivateRoute path="/admin/cocina" component={Cocina} rol="" />
      <PrivateRoute path="/admin/empleados" component={Empleados} rol="" />
      <PrivateRoute path="/admin/reportes" component={Reportes} rol="" />
    </div>
  );
};

export default Admin;
