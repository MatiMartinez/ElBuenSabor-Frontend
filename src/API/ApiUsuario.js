import api from "./api";

// Busca el usuario y si no lo encuentra lo crea.
export async function getUsuarioByEmail(email) {
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
}

// Busca el usuario pero no lo crea si no existe.
export async function getUsuario(email) {
  return await api
    .get(`/usuarios/buscar/${email}`)
    .then((res) => {
      const resData = res.data;
      console.log(resData);
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function updateUsuario(id, usuario) {
  return await api
    .put(`/usuarios/${id}`, usuario)
    .then((res) => {
      console.log("Usuario actualizado: ");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function deleteUsuario(id) {
  return await api
    .put(`/usuarios/softdelete/${id}`)
    .then((res) => {
      console.log("Usuario borrado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getUsuarios() {
  return await api
    .get("/usuarios/")
    .then((res) => {
      const dataRes = res.data;
      return dataRes;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getEmpleados() {
  return await api
    .get("/usuarios/empleados")
    .then((res) => {
      const dataRes = res.data;
      return dataRes;
    })
    .catch((err) => {
      console.log(err);
    });
}
