import React from "react";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { setBorradoRol } from "../../../../API/ApiRoles";

const EmpleadoCard = ({ empleado, toggleReload }) => {
  async function quitarRol(id) {
    await setBorradoRol(id);
    toggleReload();
  }
  return (
    <Card className="div-shadow">
      <CardHeader className="d-flex align-items-center">
        <img
          src={
            empleado.imagenPath === null || empleado.imagenPath === ""
              ? require("../../../../assets/user.svg")
              : empleado.imagenPath
          }
          className="employee-img"
          alt="user-img"
        />
        <div className="ml-4">
          <div>
            <b>{empleado.email}</b>
          </div>
          <div>
            <b>
              {empleado.nombre} {empleado.apellido}
            </b>
          </div>
          <div>
            <b>{empleado.fechaNacimiento.slice(0, 10)}</b>
          </div>
          <div>
            <b>{empleado.telefono}</b>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <CardTitle>
          <h6>Roles</h6>
        </CardTitle>
        <div className="row">
          {empleado.roles.map((rol, index) => (
            <div className="col-4" key={index}>
              {rol.nombreRol}
              <button
                className="btn btn-outline-danger ml-2"
                onClick={() => quitarRol(rol._id)}
              >
                <i className="fas fa-user-minus"></i>
              </button>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default EmpleadoCard;
