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
    .get("/reportes/pedidos-cliente", data)
    .then((res) => {
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}
