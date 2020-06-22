import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// API

// Things
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import Modal from 'react-modal';
import { customStyle } from '../../../utils/modalStyle';

//Components
import InputField from '../../GlobalReusable/InputField';

const Categorias = () => {
  // state

  // Modal
  const [isOpen, setIsOpen] = useState(false);

  const toogleModal = () => {
    setIsOpen(!isOpen);
  };

  // Forms
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ denominacion }) => {
    console.log(denominacion);
  };

  // Metodos de insumos

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <Modal isOpen={isOpen} ariaHideApp={false} style={customStyle}>
        <div className="p-4 bg-red mb-5">
          <h2 className="text-white">Crear categoría</h2>
        </div>
        <div className="form-group m-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              id="denominacion"
              label="Denominación"
              type="text"
              name="denominacion"
              register={register}
            />
            {/** Botones del modal */}
            <div className="d-flex justify-content-center border-top mt-5">
              <div className="d-flex justify-content-around pt-3 w-50">
                <button type="submit" className="btn btn-modal w-100 m-2">
                  Guardar
                </button>
                <button
                  className="btn btn-modal-outline w-100 m-2"
                  onClick={() => toogleModal()}
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
          <h1>Lista de categorías</h1>
        </div>
        {/** Filtro y busqueda de insumos */}
        <div className="container d-flex justify-content-between mb-4">
          <div className="d-flex mr-5">
            <h3>Búsqueda:</h3>
            <select className="ml-3" name="seccion" id="">
              <option value="cocina">Cocina</option>
              <option value="cajero">Caja</option>
            </select>
          </div>
          <button className="btn btn-add" onClick={() => toogleModal()}>
            Agregar categoría
          </button>
        </div>
        {/** Tabla de insumos */}
        <div className="container text-center">
          <table className="table table-striped table-light">
            <thead>
              <tr className="bg-dark text-light">
                <th>Denominación</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Harina</th>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="btn">
                      <img src={EditIcon} alt="edit-icon" width="25px" />
                    </button>
                    <button className="btn">
                      <img src={TrashIcon} alt="trash-icon" width="25px" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
