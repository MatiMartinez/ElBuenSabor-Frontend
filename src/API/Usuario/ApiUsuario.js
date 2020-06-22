import API from '../api';

export const getUsuarioPorEmail = async (email) => {
  return await API.get(`/check/:${email}`).then((res) => {
    const resData = res.data;
    console.log(resData);
    return resData;
  });
};
