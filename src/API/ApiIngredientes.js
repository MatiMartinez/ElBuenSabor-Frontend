import api from "./api";

export async function createIngrediente(ingrediente) {
  await api
    .post("/ingredientes/", ingrediente)
    .then((res) => {
      console.log(res);
      console.log("Ingrediente creado");
    })
    .catch((err) => console.log(err));
}

export async function softDeleteIngrediente(id) {
  await api
    .put(`/ingredientes/softdelete/${id}`)
    .then((res) => {
      console.log(res);
      console.log("Ingrediente quitado");
    })
    .catch((err) => console.log(err));
}

export async function updateIngrediente(id, data) {
  await api
    .put(`/ingredientes/${id}`, data)
    .then((res) => {
      console.log(res);
      console.log("Ingrediente editado");
    })
    .catch((err) => {
      console.log(err);
    });
}
