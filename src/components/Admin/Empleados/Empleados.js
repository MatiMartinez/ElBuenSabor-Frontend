import React, { useState } from "react";

import { useForm } from "react-hook-form";

// Things
import SelectRoles from "../../GlobalReusable/SelectRoles";
import Form from "./ModalForm/Form";
import ModalForm from "../../GlobalReusable/ModalForm";

// Style
import "../Admin.css";
import Encabezado from "../../GlobalReusable/Encabezado";
import ListaEmpleados from "./ListaEmpleados/ListaEmpleados";

const Empleados = () => {
  // Modal
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Filtro de rol
  const { register, handleSubmit } = useForm();
  const [rolSeleccionado, setRolSeleccionado] = useState("todos");

  const onSubmit = (data) => {
    setRolSeleccionado(data.nombreRol);
  };

  return (
    <div className="m-4">
      {/** Modal */}
      <ModalForm isOpen={isOpen}>
        <Form setIsOpen={setIsOpen} />
      </ModalForm>
      {/** Encabezado */}
      <Encabezado
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        toggle={toggle}
        title={"Empleados"}
      >
        <SelectRoles conLabel={false} register={register} opcionTodos={true} />
      </Encabezado>
      {/** Lista de empleados */}
      <ListaEmpleados rolSeleccionado={rolSeleccionado} />
    </div>
  );
};

export default Empleados;
