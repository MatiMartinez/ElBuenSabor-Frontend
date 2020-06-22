import React from 'react';

const DataProfile = ({ picture, name, email, given_name, family_name }) => {
  return (
    <div className="m-5 row d-flex">
      <div className="col-5 d-flex flex-column align-items-center p-3">
        <img
          src={picture}
          alt="img-profile"
          className="img-fluid rounded-circle mb-3"
          width="150px"
        />
        <h6>{name}</h6>
        <p>{email}</p>
      </div>
      <div className="col-7">
        <table className="table table-striped table-light">
          <tbody>
            <tr>
              <td>Nombre</td>
              <th>{given_name}</th>
            </tr>
            <tr>
              <td>Apellido</td>
              <th>{family_name}</th>
            </tr>
            <tr>
              <td>Fecha de Nacimiento</td>
              <th></th>
            </tr>
            <tr>
              <td>Teléfono</td>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataProfile;
