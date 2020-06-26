import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// API
import {
  getInsumos,
  createInsumo,
  updateInsumo,
} from '../../../API/InsumosApi';

// Things
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import Modal from 'react-modal';
import { customStyle } from '../../../utils/modalStyle';

//Components
import InputField from '../../GlobalReusable/InputField';

const Insumos = () => {
  // state
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    const cargarInsumos = async () => {
      const data = await getInsumos();
      setInsumos(data);
    };
    cargarInsumos();
  }, []);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toogleModal = (id) => {
    setIsOpen(!isOpen);
    setIdEdit(id);
  };

  // Forms
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (idEdit === undefined) {
      await createInsumo(data);
    } else {
      await updateInsumo(idEdit._id, data);
    }
    window.location.reload(true);
  };

  // Metodos de insumos

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <Modal isOpen={isOpen} ariaHideApp={false} style={customStyle}>
        <div className="p-4 bg-red mb-5">
          <h2 className="text-white">Crear insumo</h2>
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
            <InputField
              id="stockMinimo"
              label="Stock mínimo"
              type="number"
              name="stockMinimo"
              register={register}
              defaultValue={idEdit === undefined ? '' : idEdit.stockMinimo}
            />
            <InputField
              id="stockMaximo"
              label="Stock máximo"
              type="number"
              name="stockMaximo"
              register={register}
              defaultValue={idEdit === undefined ? '' : idEdit.stockMaximo}
            />
            <InputField
              id="unidadMedida"
              label="Medida"
              type="text"
              name="unidadMedida"
              register={register}
              defaultValue={idEdit === undefined ? '' : idEdit.unidadMedida}
            />
            {/** Aqui va el SELECT de categorias */}

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
          <h1>Lista de insumos</h1>
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
            Agregar insumo
          </button>
        </div>
        {/** Tabla de insumos */}
        <div className="container text-center">
          <table className="table table-striped table-light">
            <thead>
              <tr className="bg-dark text-light">
                <th>Insumo</th>
                <th>Stock actual</th>
                <th>Stock mínimo</th>
                <th>Stock máximo</th>
                <th>Medida</th>
                <th>Categoría</th>
                <th>Opciones</th>
              </tr>
            </thead>
            {insumos.length !== 0 && (
              <tbody>
                {insumos.map((insumo, i) => (
                  <tr key={insumo._id}>
                    <th>{insumo.denominacion}</th>
                    <td>{insumo.stockActual}</td>
                    <td>{insumo.stockMinimo}</td>
                    <td>{insumo.stockMaximo}</td>
                    <td>{insumo.unidadMedida}s</td>
                    <td>{insumo.rubro}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className="btn"
                          onClick={() => toogleModal(insumo)}
                        >
                          <img src={EditIcon} alt="edit-icon" width="25px" />
                        </button>
                        <button className="btn">
                          <img src={TrashIcon} alt="trash-icon" width="25px" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {insumos.length === 0 && (
            <h3 className="mt-3">No hay insumos cargados</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Insumos;
