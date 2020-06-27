import api from './api';

export const getEmpleadosPorRol = async () => {
  return api
    .get()
    .then((res) => {
      console.log('Empleados cargados');
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
