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
  const [selectCategoria, setSelectCategoria] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(selectCategoria);
    setSelectCategoria(data.categoria);
  };

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <ModalForm isOpen={isOpen} idEdit={idEdit}>
        <FormCategorias idEdit={idEdit} setIsOpen={setIsOpen} />
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
          name="rubro"
        />
      </Encabezado>
      {/** Tabla */}
      <TablaCategorias toggle={toggle} />
    </div>
  );
};

export default Categorias;
