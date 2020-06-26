import api from '../api';

export const getUsuarioByEmail = async (email) => {
  return await api.get(`/usuarios/check/${email}`).then((res) => {
    const resData = res.data;
    console.log(resData);
    return resData;
  });
};

export const updateUsuario = async (id, usuario) => {
  return await api.put(`/usuarios/${id}`, usuario).then((res) => {
    console.log('Usuario actualizado: ', res);
  });
};
