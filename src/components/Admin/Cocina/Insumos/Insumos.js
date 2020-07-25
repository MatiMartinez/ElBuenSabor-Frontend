import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Components
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import ModalForm from "../../../GlobalReusable/ModalForm";
import Encabezado from "../../../GlobalReusable/Encabezado";
import TablaInsumos from "./TablaInsumos";
import FormInsumos from "./ModalForm/FormInsumos";

const Insumos = () => {
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Select categorias
  const [selectCategoria, setSelectCategoria] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSelectCategoria(data.categoria);
    console.log(data.categoria);
    // Consultar por metodo para filtrar la tabla
  };

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <ModalForm isOpen={isOpen} idEdit={idEdit}>
        <FormInsumos idEdit={idEdit} setIsOpen={setIsOpen} />
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
          name="rubro"
        />
      </Encabezado>
      {/** Tabla */}
      <TablaInsumos toggle={toggle} />
    </div>
  );
};

export default Insumos;
