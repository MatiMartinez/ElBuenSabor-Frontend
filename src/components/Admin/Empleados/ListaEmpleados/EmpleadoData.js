import React from "react";

export default function EmpleadoData({ empleado, quitarRol }) {
  return (
    <div className="div-shadow">
      <div className="d-flex justify-content-center pt-3">
        <img
          src={require("../../../../assets/employer-card.svg")}
          alt="employer-card"
          width="30px"
          className="mr-2"
        />
        Información
      </div>
      <hr />
      <div>
        {empleado !== null && (
          <div className="row m-3">
            <div className="col-6">
              <b>Nombre:</b>
              <p>{empleado.nombre}</p>
            </div>
            <div className="col-6">
              <b>Apellido:</b>
              <p>{empleado.apellido}</p>
            </div>
            <div className="col-6">
              <b>Fecha de Nacimiento:</b>
              <p>{empleado.fechaNacimiento}</p>
            </div>
            <div className="col-6">
              <b>Teléfono:</b>
              <p>{empleado.telefono}</p>
            </div>
            <div className="col-6">
              <b>Teléfono:</b>
              <p>{empleado.telefono}</p>
            </div>
            <div className="col-12">
              <b>Email:</b>
              <p>{empleado.email}</p>
            </div>
            {/** Roles y acciones */}
            <div className="col-12">
              <b>Roles:</b>
              <div className="row">
                {empleado.roles.map((rol, index) => (
                  <div
                    className="col-6 d-flex align-items-center justify-content-between"
                    key={index}
                  >
                    <p className="m-1">{rol.nombreRol}</p>
                    <button
                      className="btn m-1"
                      onClick={() => quitarRol(rol._id)}
                    >
                      <i className="fas fa-user-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
