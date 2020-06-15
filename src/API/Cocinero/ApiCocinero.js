import API from '../api';

export const getPedidos = async () => {
  return await API.get('/posts').then((res) => {
    const responseData = res.data;
    return responseData;
  });
};

export const getInsumos = async () => {
  return await API.get('/posts').then((res) => {
    const responseData = res.data;
    return responseData;
  });
};

//! Categorias
export const getCategorias = async () => {
  return await API.get('/posts').then((res) => {
    const responseData = res.data;
    return responseData;
  });
};

export const deleteCategoria = async (id) => {
  //return await API.delete(`/categorias/${id}`);
  console.log('Borrado: ', id);
};

export const editCategoria = async (categoria) => {
  //return await API.put(``);
  console.log('Editado: ', categoria.id);
};
