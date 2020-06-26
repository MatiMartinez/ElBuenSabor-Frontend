import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// API
import {
  getRubros,
  createRubro,
  setBorradoRubro,
  updateRubro,
} from '../../../API/CategoriasApi';

// Things
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import Modal from 'react-modal';
import { customStyle } from '../../../utils/modalStyle';

//Components
import InputField from '../../GlobalReusable/InputField';

const Categorias = () => {
  // State
  const [rubros, setRubros] = useState([]);

  useEffect(() => {
    const cargarRubros = async () => {
      const data = await getRubros();
      setRubros(data);
    };
    cargarRubros();
  }, []);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toogleModal = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Forms
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (idEdit === undefined) {
      await createRubro(data);
    } else {
      await updateRubro(idEdit._id, data);
    }
    window.location.reload(true);
  };

  // Metodos de Categorias
  const borrarRubro = async (id) => {
    await setBorradoRubro(id, true);
    window.location.reload(true);
  };

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
              defaultValue={idEdit === undefined ? '' : idEdit.denominacion}
            />
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
          <button
            className="btn btn-add"
            onClick={() => toogleModal(undefined)}
          >
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
            {rubros.length !== 0 && (
              <tbody>
                {rubros.map((rubro) => (
                  <tr key={rubro._id}>
                    <th>{rubro.denominacion}</th>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className="btn"
                          onClick={() => toogleModal(rubro)}
                        >
                          <img src={EditIcon} alt="edit-icon" width="25px" />
                        </button>
                        <button
                          className="btn"
                          onClick={() => borrarRubro(rubro._id)}
                        >
                          <img src={TrashIcon} alt="trash-icon" width="25px" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {rubros.length === 0 && (
            <h3 className="mt-3">No hay categorías cargadas</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categorias;
