import api from "./api";

export async function createRol(data) {
  api
    .post("/roles/", data)
    .then((res) => {
      console.log("Rol asignado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function setBorradoRol(id) {
  await api
    .put(`/roles/softdelete/${id}`)
    .then((res) => {
      console.log("Rol quitado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
