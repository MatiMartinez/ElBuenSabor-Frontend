import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../GlobalReusable/InputField';

const EditProfile = ({ given_name, family_name }) => {
  // Formulario
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="m-5 d-flex">
      <div className="w-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <table className="table table-striped table-light">
            <tbody>
              <tr>
                <th>
                  <InputField
                    id="nombre"
                    label="Nombre"
                    type="text"
                    name="nombre"
                    register={register}
                    defaultValue={given_name}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <InputField
                    id="apellido"
                    label="Apellido"
                    type="text"
                    name="apellido"
                    register={register}
                    defaultValue={family_name}
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
