import React from 'react';

const DataProfile = ({
  picture,
  email,
  nombre,
  apellido,
  fechaNacimiento,
  telefono,
}) => {
  return (
    <div className="m-5 row d-flex">
      <div className="col-5 d-flex flex-column align-items-center p-3">
        <img
          src={picture}
          alt="img-profile"
          className="img-fluid rounded-circle mb-3"
          width="150px"
        />
        <h6>{nombre + ' ' + apellido}</h6>
        <p>{email}</p>
      </div>
      <div className="col-7">
        <table className="table table-striped table-light">
          <tbody>
            <tr>
              <td>Nombre</td>
              <th>{nombre}</th>
            </tr>
            <tr>
              <td>Apellido</td>
              <th>{apellido}</th>
            </tr>
            <tr>
              <td>Fecha de Nacimiento</td>
              <th>{fechaNacimiento}</th>
            </tr>
            <tr>
              <td>Teléfono</td>
              <th>{telefono}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataProfile;
