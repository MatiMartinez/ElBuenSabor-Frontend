import api from "./api";

export async function createIngrediente(ingrediente) {
  api
    .post("/ingredientes/", ingrediente)
    .then((res) => {
      console.log(res);
      console.log("Ingrediente creado");
    })
    .catch((err) => console.log(err));
}

export async function softDeleteIngrediente(id) {
  api
    .put(`/ingredientes/softdelete/${id}`)
    .then((res) => {
      console.log(res);
      console.log("Ingrediente quitado");
    })
    .catch((err) => console.log(err));
}
