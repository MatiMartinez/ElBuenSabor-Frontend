import React, { useState } from 'react';

import Cocina from '../components/Admin/Cocina';
import Empleados from '../components/Admin/Empleados';
import Estadisticas from '../components/Admin/Estadisticas';

const Admin = () => {
  const [toogle, setToogle] = useState(1);

  const changeToogle = (number) => {
    setToogle(number);
  };

  return (
    <div>
      {/** Nav Admin */}
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex justify-content-center w-50 border">
          <button
            className="btn btn-nav btn-lg"
            onClick={() => changeToogle(0)}
          >
            Cocina
          </button>
          <button
            className="btn btn-nav btn-lg"
            onClick={() => changeToogle(1)}
          >
            Empleados
          </button>
          <button
            className="btn btn-nav btn-lg"
            onClick={() => changeToogle(2)}
          >
            Estadísticas
          </button>
        </div>
      </div>
      {/** Content Admin */}
      {toogle === 0 && <Cocina />}
      {toogle === 1 && <Empleados />}
      {toogle === 2 && <Estadisticas />}
    </div>
  );
};

export default Admin;
