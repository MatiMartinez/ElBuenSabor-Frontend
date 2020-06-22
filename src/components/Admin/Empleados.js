import React, { useState } from 'react';

import TrashIcon from '../../assets/trash-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';

// Style
import './Admin.css';

const Empleados = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <div className="d-flex flex-column justify-content-center w-100">
        <div className="text-center mb-4">
          <h1>Lista de Empleados</h1>
        </div>
        <div className="container d-flex justify-content-between w-75 mb-4">
          <div className="d-flex mr-5">
            <h3>Búsqueda:</h3>
            <select className="ml-3" name="seccion" id="">
              <option value="cocina">Cocina</option>
              <option value="cajero">Caja</option>
            </select>
          </div>
          <button className="btn btn-dark">Agregar empleado</button>
        </div>
        {/** Card Empleados */}
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
                <h2>Martinez Matias</h2>
                <h6>38910773</h6>
                <h6>2634622209</h6>
              </div>
              <div className="w-100">
                <h6>Cocina</h6>
                <h6>Fecha de alta</h6>
                <h6>Fecha de baja</h6>
              </div>
            </div>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <div className="d-flex">
              <button className="btn">
                <img src={EditIcon} alt="edit-icon" width="35px" />
              </button>
              <button className="btn">
                <img src={TrashIcon} alt="trashicon" width="35px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empleados;
