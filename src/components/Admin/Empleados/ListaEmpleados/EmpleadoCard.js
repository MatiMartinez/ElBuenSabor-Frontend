import React from "react";
import { useAuth0 } from "../../../../react-auth0-spa";

const EmpleadoCard = ({ empleado }) => {
  const { user } = useAuth0();
  return (
    <div className="card mb-3 div-shadow">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img
            src={user.picture}
            alt="img-empleado"
            className="m-3"
            width="130px"
          />
        </div>
        <div className="col-md-9">
          <div className="card-body ml-3">
            <h5 className="card-title">
              {empleado.nombre + " " + empleado.apellido}
            </h5>
            {empleado.roles.map((rol, index) => (
              <h6 key={index} className="card-text text-muted">
                {rol.nombreRol}
              </h6>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoCard;
