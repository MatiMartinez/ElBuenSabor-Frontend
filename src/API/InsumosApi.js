import api from "./api";

export async function getInsumos() {
  return await api
    .get("/insumos/")
    .then((res) => {
      console.log("Insumos obtenidos");
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getInsumosPorRubro(rubroId) {
  return await api
    .get(`/insumos/rubro/${rubroId}`)
    .then((res) => {
      console.log("Insumos de rubro obtenidos");
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function createInsumo(insumo) {
  return await api
    .post("/insumos/", insumo)
    .then((res) => {
      console.log("Insumo creado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function setBorradoInsumo(id) {
  return await api
    .put(`/insumos/softdelete/${id}`)
    .then((res) => {
      console.log("Insumo borrado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function updateInsumo(id, insumo) {
  return await api
    .put(`/insumos/${id}`, insumo)
    .then((res) => {
      console.log("Insumo actualizado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
