import api from './api';

export const getReventas = async () => {
  return await api
    .get('/reventas/')
    .then((res) => {
      console.log(res);
      console.log('Reventas obtenidas');
      const resData = res.data;
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createReventa = async (reventa) => {
  return await api
    .post('/reventas/', reventa)
    .then((res) => {
      console.log('Reventa creada');
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const setBorradoReventa = async (id) => {
  return await api
    .put(`/reventas/softdelete/${id}`)
    .then((res) => {
      console.log('Reventa borrada');
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateReventa = async (id, reventa) => {
  return await api
    .put(`/reventas/${id}`, reventa)
    .then((res) => {
      console.log('Reventa actualizada');
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
