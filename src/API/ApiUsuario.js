import api from "./api";

export const getUsuarioByEmail = async (email) => {
  return await api
    .get(`/usuarios/check/${email}`)
    .then((res) => {
      const resData = res.data;
      console.log(resData);
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUsuario = async (id, usuario) => {
  return await api.put(`/usuarios/${id}`, usuario).then((res) => {
    console.log("Usuario actualizado: ");
    console.log(res);
  });
};

export const deleteUsuario = async (id) => {
  return await api
    .put(`/usuarios/softdelete/${id}`)
    .then((res) => {
      console.log("Usuario borrado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUsuarios = async () => {
  return await api
    .get("/usuarios/")
    .then((res) => {
      const dataRes = res.data;
      return dataRes;
    })
    .catch((err) => {
      console.log(err);
    });
};
