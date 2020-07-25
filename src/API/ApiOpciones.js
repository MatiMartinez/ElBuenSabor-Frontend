import api from "./api";

export async function getRoles() {
  return api
    .get("/opciones/nombres-rol")
    .then((res) => {
      const resData = res.data;
      console.log("Roles obtenidos");
      console.log(resData);
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getUnidadesMedida() {
  return api
    .get("/opciones/unidades-medida")
    .then((res) => {
      const resData = res.data;
      console.log("Unidades de medida obtenidas");
      console.log(res);
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}
