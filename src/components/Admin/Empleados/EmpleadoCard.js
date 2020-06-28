import React from 'react';
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';

const EmpleadoCard = ({ empleado, borrar, actualizar }) => {
  return (
    <div className="card-empleado container d-flex rounded w-75 mb-4">
      <div className="col-2 d-flex align-items-center m-2">
        <img
          src="https://via.placeholder.com/600/92c952"
          alt="img-empleado"
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="col-8 d-flex align-items-center">
        <div className="d-flex align-items-center w-100 ml-4">
          <div className="w-100">
            <h2>{empleado.nombre + ' ' + empleado.apellido}</h2>
            <h6>{empleado.email}</h6>
            <h6>{empleado.telefono}</h6>
          </div>
          <div className="w-100">
            <h6>{empleado.fechaNacimiento}</h6>
            {/** Aqui van el rol */}
            <h6>Rol</h6>
          </div>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <div className="d-flex">
          <button className="btn">
            <img
              src={EditIcon}
              alt="edit-icon"
              width="35px"
              onClick={() => actualizar()}
            />
          </button>
          <button className="btn">
            <img
              src={TrashIcon}
              alt="trashicon"
              width="35px"
              onClick={() => borrar}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoCard;
