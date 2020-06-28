import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

// Things
import SelectRoles from '../../GlobalReusable/SelectRoles';

// Style
import '../Admin.css';
import { customStyle } from '../../../utils/modalStyle';
import { getUsuarios, deleteUsuario } from '../../../API/ApiUsuario';
import EmpleadoCard from './EmpleadoCard';

const Empleados = () => {
  // State
  const [empleados, setEmpleados] = useState([]);
  //const [rolSelect, setRolSelect] = useState(0);

  useEffect(() => {
    const cargarEmpleados = async () => {
      const data = await getUsuarios();
      setEmpleados(data);
    };
    cargarEmpleados();
  }, []);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
    console.log(data);
  };

  // Formulario
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // Metodos empleados del administrador
  const borrarEmpleado = async (id) => {
    await deleteUsuario(id);
  };

  return (
    <div className="mt-4">
      <Modal isOpen={isOpen} ariaHideApp={false} style={customStyle}>
        <div className="p-4 bg-red">
          <h2 className="text-white">Crear empleado</h2>
        </div>
        <div className="form-group m-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*<SelectData  Usuarios sin roles
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
        {empleados.length !== 0 &&
          empleados.map((empleado, i) => (
            <EmpleadoCard
              key={i}
              empleado={empleado}
              borrar={borrarEmpleado}
              actualizar={() => toggle(empleado)}
            />
          ))}
        {empleados.length === 0 && (
          <h3 className="mt-3">No hay empleados cargados</h3>
        )}
      </div>
    </div>
  );
};

export default Empleados;
