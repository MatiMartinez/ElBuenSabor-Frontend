import React, { useState, useEffect } from 'react';

import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import { Modal } from 'reactstrap';
import { useForm } from 'react-hook-form';

// Things
import SelectRoles from '../../GlobalReusable/SelectRoles';

// Style
import '../Admin.css';
import { customStyle } from '../../../utils/modalStyle';
import SelectData from '../../GlobalReusable/SelectData';

const Empleados = () => {
  // State
  const [empleados, setEmpleados] = useState([]);
  const [rolSelect, setRolSelect] = useState(0);

  useEffect(() => {
    const cargarEmpleados = async () => {};
  });

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Formulario
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-4">
      <Modal isOpen={isOpen} ariaHideApp={false} style={customStyle}>
        <div className="p-4 bg-red">
          <h2 className="text-white">Crear empleado</h2>
        </div>
        <div className="form-group m-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*<SelectData
              //datos={}
              label="Usuarios"
              id="usuarios"
              name="usuarios"
              register={register}
            />*/}
            <SelectRoles register={register} conLabel={true} />
            {/** Botones del modal */}
            <div className="d-flex justify-content-center border-top mt-5">
              <div className="d-flex justify-content-around pt-3 w-50">
                <button type="submit" className="btn btn-modal w-100 m-2">
                  Guardar
                </button>
                <button
                  className="btn btn-modal-outline w-100 m-2"
                  onClick={() => setIsOpen(false)}
                >
                  Volver
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <div className="d-flex flex-column justify-content-center w-100">
        <div className="text-center mb-4">
          <h1>Lista de Empleados</h1>
        </div>
        <div className="container d-flex justify-content-between w-75 mb-4">
          <div className="d-flex mr-5">
            <h3>Roles:</h3>
            <SelectRoles register={register} conLabel={false} />
          </div>
          <button className="btn btn-dark" onClick={() => toggle(undefined)}>
            Agregar empleado
          </button>
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
