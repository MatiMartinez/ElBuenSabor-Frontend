import React, { useState } from 'react';

import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';

// Things
import UserIcon from '../assets/user-icon.svg';
import DataProfile from '../components/Profile/DataProfile';
import EditProfile from '../components/Profile/EditProfile';

const Profile = () => {
  const [enable, setEnable] = useState(true);

  const toggle = () => {
    setEnable(!enable);
  };

  const { loading, user, userdb } = useAuth0();

  if (loading || !userdb) {
    return <Loading />;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center">
        <img src={UserIcon} alt="user-icon" width="30px" />
        <h5 className="p-0 m-0 ml-3">Mi Perfil</h5>
      </div>
      <div className="d-flex flex-column profile-container mt-5">
        {/** Botones Nav Perfil */}
        <div className="d-flex border-bottom pb-3 pt-3">
          <div className="d-flex w-100 ml-4">
            <button
              className="btn btn-nav-profile"
              onClick={() => toggle()}
              disabled={enable}
            >
              Perfil
            </button>
            <button
              className="btn btn-nav-profile"
              onClick={() => toggle()}
              disabled={!enable}
            >
              Editar Perfil
            </button>
          </div>
        </div>
        {/** Contenido del perfil, datos o editar */}
        {enable && (
          <DataProfile
            picture={user.picture}
            email={userdb.email}
            nombre={userdb.nombre}
            apellido={userdb.apellido}
            fechaNacimiento={userdb.fechaNacimiento}
            telefono={userdb.telefono}
          />
        )}
        {!enable && <EditProfile userdb={userdb} />}
      </div>
    </div>
  );
};

export default Profile;
