import api from "./api";

export const getRubros = async () => {
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
};

export const getRubrosRaiz = async () => {
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
};

export const createRubro = async (rubro) => {
  return await api
    .post("/rubros/", rubro)
    .then((res) => {
      console.log("Rubro creado: " + res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setBorradoRubro = async (id, borrado) => {
  return await api
    .put(`/rubros/softdelete/${id}`)
    .then((res) => {
      console.log("Rubro borrado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateRubro = async (id, rubro) => {
  return await api
    .put(`/rubros/${id}`, rubro)
    .then((res) => {
      console.log("Rubro actualizado");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
