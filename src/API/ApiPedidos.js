import api from "./api";

export async function createPedido(pedido) {
  await api
    .post("/pedidos/", pedido)
    .then((res) => {
      console.log(res);
      console.log("Pedido creado");
    })
    .catch((err) => console.log(err));
}

export async function getPedidosByEstado(estado) {
  return await api
    .get(`/pedidos/estado/${estado}`)
    .then((res) => {
      console.log(res);
      console.log("Pedidos obtenidos");
      const dataRes = res.data;
      return dataRes;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function updateEstado(estado, id) {
  await api
    .put(`/pedidos/${estado}/${id}`)
    .then((res) => {
      console.log(res);
      console.log("Pedido ", estado);
    })
    .catch((err) => {
      console.log(err);
    });
}
