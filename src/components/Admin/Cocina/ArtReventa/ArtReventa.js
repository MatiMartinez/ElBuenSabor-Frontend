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
    setIsOpen(!isOpen);
    setIdEdit(data);
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
    <div>
      {/** Modal */}
      <ModalForm isOpen={isOpen} idEdit={idEdit}>
        <Form idEdit={idEdit} setIsOpen={setIsOpen} />
      </ModalForm>
      {/** Encabezado */}
      <Encabezado
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        toggle={toggle}
        title={"Artículos de reventa"}
      >
        <SelectCategorias
          register={register}
          label={false}
          allValue={true}
          raiz={false}
        />
      </Encabezado>
      {/** Tabla */}
      <TablaReventas selectCategoria={selectCategoria} toggle={toggle} />
    </div>
  );
};

export default ArtReventa;
