import api from "./api";

export async function getArticulosParaComprar() {
  return await api
    .get("/reportes/stock")
    .then((res) => {
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getPedidosPorCliente(data) {
  return await api
    .get("/reportes/pedidos-cliente", { params: data })
    .then((res) => {
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getRankingPlatos(data) {
  return await api
    .get("/reportes/ranking", { params: data })
    .then((res) => {
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getRecaudaciones(data) {
  return await api
    .get("/reportes/recaudaciones", { params: data })
    .then((res) => {
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}
