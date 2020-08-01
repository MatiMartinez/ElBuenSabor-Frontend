import api from "./api";

export async function createDomicilio(domicilio) {
  await api
    .post("/domicilios/", domicilio)
    .then((res) => {
      console.log(res);
      console.log("Domicilio creado");
    })
    .catch((err) => console.log(err));
}

export async function updateDomicilio(id, domicilio) {
  await api
    .put(`/domicilios/${id}`, domicilio)
    .then((res) => {
      console.log(res);
      console.log("Domicilio actualizado");
    })
    .catch((err) => console.log(err));
}
