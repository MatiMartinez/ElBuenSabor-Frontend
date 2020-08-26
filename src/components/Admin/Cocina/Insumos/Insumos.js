import React, { useState } from "react";
import { useForm } from "react-hook-form";

//Components
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import ModalForm from "../../../GlobalReusable/ModalForm";
import Encabezado from "../../../GlobalReusable/Encabezado";
import TablaInsumos from "./TablaInsumos/TablaInsumos";
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
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSelectedCategory(data.rubro);
  };

  // Re-render
  const [reload, setReload] = useState(true);

  function toggleReload() {
    setReload(!reload);
  }

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <ModalForm isOpen={isOpen}>
        <FormInsumos
          idEdit={idEdit}
          toggle={toggle}
          toggleReload={toggleReload}
        />
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
          name="rubro"
          defaultValue={selectedCategory}
        />
      </Encabezado>
      {/** Tabla */}
      <TablaInsumos
        selectedCategory={selectedCategory}
        toggle={toggle}
        reload={reload}
        setReload={setReload}
      />
    </div>
  );
};

export default Insumos;
