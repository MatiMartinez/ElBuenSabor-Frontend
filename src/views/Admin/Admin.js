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
      <PrivateRoute path="/admin/cocina" component={Cocina} />
      <PrivateRoute path="/admin/empleados" component={Empleados} />
      <PrivateRoute path="/admin/reportes" component={Reportes} />
    </div>
  );
};

export default Admin;
