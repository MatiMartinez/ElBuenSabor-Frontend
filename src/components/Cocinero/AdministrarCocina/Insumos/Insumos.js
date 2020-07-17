import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// API
import { getInsumos, setBorradoInsumo } from "../../../../API/InsumosApi";

//Components
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import ModalForm from "../../../GlobalReusable/ModalForm";
import Form from "./ModalForm/Form";
import Encabezado from "../../../GlobalReusable/Encabezado";
import Tabla from "./Tabla";

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

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Metodos de insumos
  const borrarInsumo = async (id) => {
    await setBorradoInsumo(id);
    window.location.reload(true);
  };

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
      <ModalForm isOpen={isOpen} idEdit={idEdit}>
        <Form idEdit={idEdit} setIsOpen={setIsOpen} />
      </ModalForm>
      {/** Encabezado */}
      <Encabezado
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        toggle={toggle}
        title={"Insumos"}
      >
        <SelectCategorias
          register={register}
          label={false}
          allValue={true}
          raiz={false}
        />
      </Encabezado>
      {/** Tabla */}
      <Tabla insumos={insumos} toggle={toggle} borrarInsumo={borrarInsumo} />
    </div>
  );
};

export default Insumos;
