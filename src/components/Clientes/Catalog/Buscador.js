import React from 'react';

const Buscador = ({ type, name, onChange }) => {
  return (
    <input
      className="form-control rounded-0 search-content"
      type={type}
      required
      name={name}
      onChange={onChange}
      placeholder="Buscar productos..."
    />
  );
};

export default Buscador;
