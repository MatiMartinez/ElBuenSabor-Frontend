import React, { useState } from "react";
import { useForm } from "react-hook-form";

// API

//Components
import ModalForm from "../../../GlobalReusable/ModalForm";
import Encabezado from "../../../GlobalReusable/Encabezado";
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import TablaPlatos from "./TablaPlatos/TablaPlatos";
import FormPlatos from "./ModalForm/FormPlatos";

const Platos = () => {
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
    console.log(selectCategoria);
    // Consultar por metodo para filtrar la tabla
  };

  /** JSX -------------------------------------------------------------------------------- */
  return (
    <div className="mt-4">
      {/** Modal */}
      <ModalForm isOpen={isOpen} idEdit={idEdit}>
        <FormPlatos idEdit={idEdit} setIsOpen={setIsOpen} />
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
          allValue={true}
          name="rubro" //Verificar aqui
        />
      </Encabezado>
      {/** Tabla */}
      <TablaPlatos toggle={toggle} />
    </div>
  );
};

export default Platos;
