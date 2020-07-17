import React from "react";

export default function Encabezado(props) {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <div className="mr-5">
          <h3>{props.title}</h3>
        </div>
        <div>
          <button
            className="btn btn-warning"
            onClick={() => props.toggle(undefined)}
          >
            <i className="fas fa-plus mr-2"></i>AGREGAR
          </button>
        </div>
      </div>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <div className="d-flex">
          <div className="mr-3">{props.children}</div>
          <div>
            <button type="submit" className="btn btn-apply">
              APLICAR FILTROS
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
