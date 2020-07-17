import React, { useState } from "react";

// API

// Things
import TrashIcon from "../../../../assets/trash-icon.svg";
import EditIcon from "../../../../assets/edit-icon.svg";

//Components
import ModalForm from "../../../GlobalReusable/ModalForm";
import Form from "./ModalForm/Form";
import Encabezado from "../../../GlobalReusable/Encabezado";
import { useForm } from "react-hook-form";
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";

const Platos = () => {
  // state

  // Modal
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Metodos de insumos

  // Select categorias
  // Select categorias
  const [selectCategoria, setSelectCategoria] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSelectCategoria(data.categoria);
    // Consultar por metodo para filtrar la tabla
  };

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <ModalForm toggle={toggle}>
        <Form />
      </ModalForm>
      {/** Encabezado */}
      <Encabezado
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        toggle={toggle}
        title={"Platos"}
      >
        <SelectCategorias
          register={register}
          label={false}
          allValue={true}
          raiz={false}
        />
      </Encabezado>
      {/** Tabla */}
      <div className="d-flex flex-column justify-content-center w-100">
        {/** Tabla de insumos */}
        <div className="container text-center">
          <table className="table table-striped table-light">
            <thead>
              <tr className="bg-dark text-light">
                <th>Denominación</th>
                <th>Tiempo de cocina (minutos)</th>
                <th>Categoría</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Harina</th>
                <td>20</td>
                <td>Pizzas</td>
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

export default Platos;
