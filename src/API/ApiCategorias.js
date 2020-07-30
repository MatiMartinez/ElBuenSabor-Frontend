import api from "./api";

export async function getRubros() {
  return await api
    .get("/rubros/")
    .then((res) => {
      const resData = res.data;
      console.log("Rubros obtenidos");
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getRubrosRaiz() {
  return await api
    .get("/rubros/raices")
    .then((res) => {
      const resData = res.data;
      console.log("Rubros raices obtenidos");
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getRubrosCatalogo() {
  return await api
    .get("/rubros/deCatalogo")
    .then((res) => {
      const resData = res.data;
      console.log("Rubros de catalogo obtenidos");
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getRubrosInsumo() {
  return await api
    .get("/rubros/deInsumo")
    .then((res) => {
      const resData = res.data;
      console.log("Rubros de insumos obtenidos");
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function createRubro(rubro) {
  return await api
    .post("/rubros/", rubro)
    .then((res) => {
      console.log("Rubro creado: " + res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function setBorradoRubro(id, borrado) {
  return await api
    .put(`/rubros/softdelete/${id}`)
    .then((res) => {
      console.log("Rubro borrado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function updateRubro(id, rubro) {
  return await api
    .put(`/rubros/${id}`, rubro)
    .then((res) => {
      console.log("Rubro actualizado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
