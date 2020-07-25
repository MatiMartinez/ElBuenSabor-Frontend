import React from "react";

const EmpleadoCard = ({ empleado }) => {
  return (
    <div className="card mb-3 div-shadow">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            src={require("../../../../assets/employer-card.svg")}
            alt="img-empleado"
            className="m-3"
            width="130px"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body ml-3">
            <h5 className="card-title">
              {empleado.nombre + " " + empleado.apellido}
            </h5>
            <p className="card-text">[Cocinero, Cajero]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoCard;
