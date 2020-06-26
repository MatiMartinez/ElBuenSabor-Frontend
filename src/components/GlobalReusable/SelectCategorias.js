import React from 'react';

//API
import { getRubros } from '../../API/CategoriasApi';

const SelectCategorias = async () => {
  const categorias = await getRubros();
  return (
    <div className="form-group">
      <select name="" id="" className="">
        {categorias.map((categoria) => (
          <value></value>
        ))}
      </select>
    </div>
  );
};

export default SelectCategorias;
