import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import FormIngredientes from "../ModalForm/FormIngredientes";
import ModalForm from "../../../../GlobalReusable/ModalForm";
import OpcionesIngrediente from "./OpcionesIngrediente";
import OpcionesPlato from "./OpcionesPlato";

export default function PlatoCard({ plato, toggleReload, togglePlato }) {
  const [isOpen, setIsOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(undefined);

  function toggle() {
    setIsOpen(!isOpen);
    setIdEdit(undefined);
  }

  function toggleEdit(ingrediente) {
    setIdEdit(ingrediente);
    setIsOpen(!isOpen);
  }

  return (
    <div className="col-6 mb-3">
      <ModalForm isOpen={isOpen}>
        <FormIngredientes
          idEdit={idEdit}
          toggle={toggle}
          toggleReload={toggleReload}
          id={plato._id}
        />
      </ModalForm>
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="m-0">
              <b>{plato.denominacion} - </b>
              <i>${plato.precioVenta}</i>
            </h5>
            <div>
              Categoria ({plato.rubro.denominacion}) - Tiempo{" "}
              {plato.tiempoCocina} min
            </div>
          </div>
          <div>
            <img src={plato.imagenPath} alt="img-plato" width="100px" />
            <OpcionesPlato
              plato={plato}
              togglePlato={togglePlato}
              toggleReload={toggleReload}
            />
          </div>
        </CardHeader>
        <CardBody>
          <CardTitle className="d-flex justify-content-between align-items-center">
            <h6>Ingredientes</h6>
            <button className="btn btn-info btn-sm" onClick={() => toggle()}>
              <i className="fas fa-plus mr-2"></i>Ingrediente
            </button>
          </CardTitle>
          <hr />
          <div>
            {plato.ingredientes.length !== 0 ? (
              <table className="table table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>Insumo</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-center">
                      <i className="fas fa-cog"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plato.ingredientes.map((ingrediente, index) => (
                    <tr key={index}>
                      <td>{ingrediente.insumo.denominacion}</td>
                      <td className="text-center">{ingrediente.cantidad}</td>
                      <td className="text-center">
                        <OpcionesIngrediente
                          ingrediente={ingrediente}
                          toggleEdit={toggleEdit}
                          toggleReload={toggleReload}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h6 className="text-muted text-center">No posee ingredientes</h6>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
