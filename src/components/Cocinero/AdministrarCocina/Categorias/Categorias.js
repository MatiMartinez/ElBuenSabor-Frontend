import React, { useState, useEffect } from "react";

// API
import { getRubros, setBorradoRubro } from "../../../../API/CategoriasApi";

// Things
import TrashIcon from "../../../../assets/trash-icon.svg";
import EditIcon from "../../../../assets/edit-icon.svg";

//Components
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import ModalForm from "../../../GlobalReusable/ModalForm";
import Form from "./ModalForm/Form";
import Encabezado from "../../../GlobalReusable/Encabezado";
import { useForm } from "react-hook-form";
import Tabla from "./Tabla";

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

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Metodos de Categorias
  const borrarRubro = async (id) => {
    await setBorradoRubro(id, true);
    window.location.reload(true);
  };

  // Select categorias
  const [selectCategoria, setSelectCategoria] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.categoria);
    setSelectCategoria(data.categoria);
  };

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <ModalForm isOpen={isOpen} idEdit={idEdit}>
        <Form idEdit={idEdit} setIsOpen={setIsOpen} />
      </ModalForm>
      {/** Encabezado */}
      <Encabezado
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        toggle={toggle}
        title={"Categoría"}
      >
        <SelectCategorias
          register={register}
          label={false}
          allValue={true}
          raiz={false}
        />
      </Encabezado>
      {/** Tabla */}
      <Tabla rubros={rubros} toggle={toggle} borrarRubro={borrarRubro} />
    </div>
  );
};

export default Categorias;
