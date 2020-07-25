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
