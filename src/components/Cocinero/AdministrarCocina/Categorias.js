import React, { useState, useEffect } from 'react';

import {
  getCategorias,
  deleteCategoria,
  editCategoria,
} from '../../../API/Cocinero/ApiCocinero';

import Imagen from '../../../assets/cook-yellow.png';
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    const newCategorias = await getCategorias();
    setCategorias(newCategorias);
  };

  const borrarCategoria = async (id) => {
    await deleteCategoria(id);
    cargarCategorias();
  };

  const editarCategoria = async (categoria) => {
    await editCategoria(categoria);
    cargarCategorias();
  };

  return (
    <div className="">
      {/** Lista de Categorias */}
      <div className="row d-flex justify-content-around">
        {categorias.map((categoria) => (
          <div className="card bg-light col-3 m-3" key={categoria.id}>
            <div className="row">
              <div className="col-md-5">
                <img src={Imagen} alt={categoria.id} className="img-fluid" />
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-around p-3">
                <h3 className="card-title">{categoria.id} Categoría</h3>
                <div className="d-flex justify-content-around w-50">
                  <button
                    className="btn"
                    onClick={() => editarCategoria(categoria)}
                  >
                    <img src={EditIcon} alt="edit-icon" width="25px" />
                  </button>
                  <button
                    className="btn"
                    onClick={() => borrarCategoria(categoria.id)}
                  >
                    <img src={TrashIcon} alt="trash-icon" width="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/** Formulario para crear y editar categorias */}
    </div>
  );
};

export default Categorias;
