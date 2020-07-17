import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// api
import { getReventas, setBorradoReventa } from "../../../../API/ArtReventaApi";

// things
import ModalForm from "../../../GlobalReusable/ModalForm";
import Form from "./ModalForm/Form";
import Encabezado from "../../../GlobalReusable/Encabezado";
import SelectCategorias from "../../../GlobalReusable/SelectCategorias";
import Tabla from "./Tabla";

const ArtReventa = () => {
  // Tabla
  const [reventas, setReventas] = useState([]);

  useEffect(() => {
    const cargarReventas = async () => {
      const data = await getReventas();
      setReventas(data);
    };
    cargarReventas();
  }, []);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  const toggle = (data) => {
    setIsOpen(!isOpen);
    setIdEdit(data);
  };

  // Metodos de articulos de reventa
  const borrarReventa = async (id) => {
    await setBorradoReventa(id);
    window.location.reload(true);
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
      <Tabla
        reventas={reventas}
        selectCategoria={selectCategoria}
        toggle={toggle}
        borrarReventa={borrarReventa}
      />
    </div>
  );
};

export default ArtReventa;
