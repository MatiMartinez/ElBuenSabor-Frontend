import api from "./api";

export async function getPlatos() {
  return await api
    .get("/platos/")
    .then((res) => {
      console.log(res);
      console.log("Platos obtenidos");
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getPlatosPorRubro(categoriaId) {
  return await api
    .get(`/platos/rubro/${categoriaId}`)
    .then((res) => {
      console.log(res);
      console.log("Platos obtenidos");
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function createPlato(plato) {
  return await api
    .post("/platos/", plato)
    .then((res) => {
      console.log(res);
      console.log("Plato creado");
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function setBorradoPlato(id) {
  await api
    .put(`/platos/softdelete/${id}`)
    .then((res) => {
      console.log(res);
      console("Plato borrado");
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function updatePlato(id, plato) {
  await api
    .put(`/platos/${id}`, plato)
    .then((res) => {
      console.log(res);
      console.log("Plato actualizado");
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function addIngredientes(id, ingredientes) {
  await api
    .put(`/platos/${id}/agregar-ingredientes`, ingredientes)
    .then((res) => {
      console.log(res);
      console.log("Ingredientes agregados");
    })
    .catch((err) => {
      console.log(err);
    });
}
