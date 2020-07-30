import React, { useState } from "react";
import FormIngrediente from "./FormIngrediente";
import { addIngredientes } from "../../../../../../API/ApiPlatos";

export default function InfoPlato({ plato }) {
  const [ingredientes, setIngredientes] = useState([
    {
      insumo_id: "",
      cantidad: 0,
    },
  ]);

  function addIngrediente() {
    setIngredientes([
      ...ingredientes,
      {
        insumo_id: "",
        cantidad: 0,
      },
    ]);
  }
  function removeIngrediente(index) {
    const values = [...ingredientes];
    values.splice(index, 1);
    setIngredientes(values);
  }

  function handleChange(index, e) {
    const values = [...ingredientes];
    values[index][e.target.name] = e.target.value;
    setIngredientes(values);
  }

  async function onSubmit(e) {
    console.log(ingredientes);
    await addIngredientes(plato._id, ingredientes); // Aqui es donde no andaba
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {ingredientes.map((ingrediente, index) => (
          <div key={index}>
            <FormIngrediente
              ingrediente={ingrediente}
              index={index}
              handleChange={handleChange}
              removeIngrediente={removeIngrediente}
            />
          </div>
        ))}
        <button className="btn" type="button" onClick={() => addIngrediente()}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <hr />
        <div className="d-flex justify-content-end">
          <button className="btn btn-info" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
