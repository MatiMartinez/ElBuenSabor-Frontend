import React, { useState } from "react";

//Components
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import ModalForm from "../../../GlobalReusable/ModalForm";
import FormCategorias from "./ModalForm/FormCategorias";
import Encabezado from "../../../GlobalReusable/Encabezado";
import { useForm } from "react-hook-form";
import TablaCategorias from "./TablaCategorias";

const Categorias = () => {
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Select categorias
  const [selectedCategory, setSelectedCategory] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSelectedCategory(data.rubro);
  };

  // Re-render
  const [reload, setReload] = useState(true);

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <ModalForm isOpen={isOpen} idEdit={idEdit}>
        <FormCategorias
          idEdit={idEdit}
          setIsOpen={setIsOpen}
          setReload={setReload}
        />
      </ModalForm>
      {/** Encabezado */}
      <Encabezado
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        toggle={toggle}
        title={"Categorías"}
      >
        <SelectCategorias
          name="rubro"
          register={register}
          label={false}
          allValue={true}
          defaultValue={selectedCategory}
        />
      </Encabezado>
      {/** Tabla */}
      <TablaCategorias
        toggle={toggle}
        reload={reload}
        setReload={setReload}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Categorias;
