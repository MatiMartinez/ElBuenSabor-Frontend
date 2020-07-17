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

export async function createPlato(plato) {
  await api
    .post() // Aqui em quede haciendo codigo
    .then()
    .catch((err) => {
      console.log(err);
    });
}
