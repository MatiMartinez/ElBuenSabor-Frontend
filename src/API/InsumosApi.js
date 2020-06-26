import api from './api';

export const getInsumos = async () => {
  return await api
    .get('/insumos/')
    .then((res) => {
      const responseData = res.data;
      return responseData;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createInsumo = async (insumo) => {
  return await api
    .post('/insumos/', insumo)
    .then((res) => {
      console.log('Insumo creado');
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateInsumo = async (id, insumo) => {
  return await api
    .put(`/insumos/${id}`, insumo)
    .then((res) => {
      console.log('Insumo actualizado');
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
