import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../GlobalReusable/InputField';

// api
import { updateUsuario } from '../../API/ApiUsuario';

const EditProfile = ({ userdb }) => {
  // Formulario
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await updateUsuario(userdb._id, data);
    window.location.reload(true);
  };

  return (
    <div className="m-5 d-flex">
      <div className="w-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6">
              <InputField
                id="nombre"
                label="Nombre"
                type="text"
                name="nombre"
                register={register}
                defaultValue={userdb.nombre}
              />
            </div>
            <div className="col-6">
              <InputField
                id="apellido"
                label="Apellido"
                type="text"
                name="apellido"
                register={register}
                defaultValue={userdb.apellido}
              />
            </div>
            <div className="col-6">
              <InputField
                id="fechaNacimiento"
                label="Fecha de Nacimiento"
                type="text"
                name="fechaNacimiento"
                register={register}
                defaultValue={userdb.fechaNacimiento}
              />
            </div>
            <div className="col-6">
              <InputField
                id="telefono"
                label="Telefono"
                type="number"
                name="telefono"
                register={register}
                defaultValue={userdb.telefono}
              />
            </div>
            <div className="col d-flex justify-content-end pt-4 mt-5 border-top">
              <button
                className="btn btn-success mr-5 btn-lg rounded-0"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
