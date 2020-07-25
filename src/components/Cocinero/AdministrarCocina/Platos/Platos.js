import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// API

//Components
import ModalForm from "../../../GlobalReusable/ModalForm";
import Form from "./ModalForm/Form";
import Encabezado from "../../../GlobalReusable/Encabezado";
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import TablaPlatos from "./TablaPlatos";
import { getPlatos, setBorradoPlato } from "../../../../API/ApiPlatos";

const Platos = () => {
  // state
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    async function cargarPlatos() {
      const data = await getPlatos();
      setPlatos(data);
    }
    cargarPlatos();
  }, []);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Metodos de platos
  async function borrarPlato(id) {
    await setBorradoPlato(id);
    window.location.reload(true);
  }

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
        title={"Platos"}
      >
        <SelectCategorias
          register={register}
          label={false}
          allValue={true}
          raiz={false}
        />
      </Encabezado>
      {/** Tabla */}
      <TablaPlatos platos={platos} toggle={toggle} borrarPlato={borrarPlato} />
    </div>
  );
};

export default Platos;
