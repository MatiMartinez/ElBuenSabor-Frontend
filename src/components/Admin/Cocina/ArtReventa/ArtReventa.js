import React, { useState } from "react";
import { useForm } from "react-hook-form";

// things
import ModalForm from "../../../GlobalReusable/ModalForm";
import Form from "./ModalForm/FormArtReventas";
import Encabezado from "../../../GlobalReusable/Encabezado";
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import TablaReventas from "./TablaReventas";

const ArtReventa = () => {
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toggle = (data) => {
    setIdEdit(data);
    setIsOpen(!isOpen);
  };

  // Select categorias
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSelectedCategory(data.rubro);
  };

  // Re-render
  const [reload, setReload] = useState(true);

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div>
      {/** Modal */}
      <ModalForm isOpen={isOpen}>
        <Form idEdit={idEdit} setIsOpen={setIsOpen} setReload={setReload} />
      </ModalForm>
      {/** Encabezado */}
      <Encabezado
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        toggle={toggle}
        title={"Artículos de reventa"}
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
      <TablaReventas
        selectedCategory={selectedCategory}
        toggle={toggle}
        reload={reload}
        setReload={setReload}
      />
    </div>
  );
};

export default ArtReventa;
