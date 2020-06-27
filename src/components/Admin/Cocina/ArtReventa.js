import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { customStyle } from '../../../utils/modalStyle';

// api
import {
  getReventas,
  createReventa,
  updateReventa,
} from '../../../API/ArtReventaApi';

// things
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import InputField from '../../GlobalReusable/InputField';
import Modal from 'react-modal';
import SelectCategorias from '../../GlobalReusable/SelectCategorias';
import SelectMedida from '../../GlobalReusable/SelectMedida';

const ArtReventa = () => {
  // state
  const [reventas, setReventas] = useState([]);

  useEffect(() => {
    const cargarReventas = async () => {
      const data = await getReventas();
      setReventas(data);
    };
    cargarReventas();
  }, []);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Formulario
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (idEdit === undefined) {
      await createReventa(data);
    } else {
      await updateReventa(idEdit._id, data);
    }
    window.location.reload(true);
  };

  // Metodos de articulos de reventa
  const borrarReventa = () => {};

  // Select categorias
  const [selectCategoria, setSelectCategoria] = useState('');
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const onSubmitCategoria = (data) => {
    setSelectCategoria(data);
  };

  return (
    <div className="mt-4">
      {/** Modal */}
      <Modal isOpen={isOpen} ariaHideApp={false} style={customStyle}>
        <div className="p-4 bg-red">
          <h2 className="text-white">Crear artículo de reventa</h2>
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
              id="precioCompra"
              label="Precio de Compra"
              type="number"
              name="precioCompra"
              register={register}
              defaultValue={idEdit === undefined ? '' : idEdit.precioCompra}
            />
            <InputField
              id="precioVenta"
              label="Precio de Venta"
              type="number"
              name="precioVenta"
              register={register}
              defaultValue={idEdit === undefined ? '' : idEdit.precioVenta}
            />
            <SelectMedida register={register} />
            <InputField
              id="stockActual"
              label="Stock Actual"
              type="number"
              name="stockActual"
              register={register}
              defaultValue={idEdit === undefined ? '' : idEdit.stockActual}
            />
            <InputField
              id="stockMinimo"
              label="Stock Mínimo"
              type="number"
              name="stockMinimo"
              register={register}
              defaultValue={idEdit === undefined ? '' : idEdit.stockMinimo}
            />
            <InputField
              id="stockMaximo"
              label="Stock Máximo"
              type="number"
              name="stockMaximo"
              register={register}
              defaultValue={idEdit === undefined ? '' : idEdit.stockMaximo}
            />
            <SelectCategorias register={register} label={true} todos={false} />
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
          <h1>Lista de Artículos de reventa</h1>
        </div>
        {/** Filtro y busqueda de insumos */}
        <div className="container d-flex justify-content-between mb-4">
          <form onSubmit={handleSubmit2(onSubmitCategoria)}>
            <div className="d-flex">
              <h3 className="mr-3">Categorías:</h3>
              <SelectCategorias
                register={register2}
                label={false}
                todos={true}
              />
              <button className="btn btn-secondary ml-3 h-50" type="submit">
                Buscar
              </button>
            </div>
          </form>
          <button className="btn btn-add" onClick={() => toggle(undefined)}>
            Agregar artículo de reventa
          </button>
        </div>
        {/** Tabla de articulos de reventa */}
        <div className="container text-center">
          <table className="table table-striped table-light">
            <thead>
              <tr className="bg-dark text-light">
                <th>Denominación</th>
                <th>Precio de compra</th>
                <th>Precio de venta</th>
                <th>Medida</th>
                <th>Stock actual</th>
                <th>Stock mínimo</th>
                <th>Stock máximo</th>
                <th>Categoría</th>
                <th>Opciones</th>
              </tr>
            </thead>
            {reventas.length !== 0 && (
              <tbody>
                {selectCategoria === ''
                  ? reventas.map((reventa) => (
                      <tr key={reventa._id}>
                        <th>{reventa.denominacion}</th>
                        <td>{reventa.precioCompra}</td>
                        <td>{reventa.precioVenta}</td>
                        <td>{reventa.unidadMedida}</td>
                        <td>{reventa.stockActual}</td>
                        <td>{reventa.stockMinimo}</td>
                        <td>{reventa.stockMaximo}</td>
                        <td>{reventa.rubro}</td>
                        <td>
                          <div className="d-flex align-items-center justify-content-center">
                            <button
                              className="btn"
                              onClick={() => toggle(reventa)}
                            >
                              <img
                                src={EditIcon}
                                alt="edit-icon"
                                width="25px"
                              />
                            </button>
                            <button
                              className="btn"
                              onClick={() => borrarReventa(reventa._id)}
                            >
                              <img
                                src={TrashIcon}
                                alt="trash-icon"
                                width="25px"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  : reventas
                      .filter((reventa) => reventa.rubro === selectCategoria)
                      .map((reventa) => (
                        <tr key={reventa._id}>
                          <th>{reventa.denominacion}</th>
                          <td>{reventa.precioCompra}</td>
                          <td>{reventa.precioVenta}</td>
                          <td>{reventa.unidadMedida}</td>
                          <td>{reventa.stockActual}</td>
                          <td>{reventa.stockMinimo}</td>
                          <td>{reventa.stockMaximo}</td>
                          <td>{reventa.rubro.denominacion}</td>
                          <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <button
                                className="btn"
                                onClick={() => toggle(reventa)}
                              >
                                <img
                                  src={EditIcon}
                                  alt="edit-icon"
                                  width="25px"
                                />
                              </button>
                              <button
                                className="btn"
                                onClick={() => borrarReventa(reventa._id)}
                              >
                                <img
                                  src={TrashIcon}
                                  alt="trash-icon"
                                  width="25px"
                                />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
              </tbody>
            )}
          </table>
          {ArtReventa.length === 0 && (
            <h3 className="mt-3">No hay artículos de reventa cargados</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtReventa;
