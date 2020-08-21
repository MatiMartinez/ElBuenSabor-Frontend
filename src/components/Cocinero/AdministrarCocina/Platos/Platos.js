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

  const [reload, setReload] = useState(true);

  function toggleReload() {
    setReload(!reload);
  }

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
      <ModalForm isOpen={isOpen}>
        <FormPlatos
          idEdit={idEdit}
          toggleReload={toggleReload}
          toggle={toggle}
        />
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
      <TablaPlatos
        toggle={toggle}
        reload={reload}
        toggleReload={toggleReload}
      />
    </div>
  );
};

export default Platos;
