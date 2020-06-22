import React, { useState } from 'react';

import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';

// Things
import UserIcon from '../assets/user-icon.svg';
import DataProfile from '../components/Profile/DataProfile';
import EditProfile from '../components/Profile/EditProfile';

const Profile = () => {
  const [enable, setEnable] = useState(0);

  const toggle = (number) => {
    setEnable(number);
  };

  const { loading, user } = useAuth0();
  console.log(user);

  if (loading || !user) {
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
            <button className="btn btn-nav-profile" onClick={() => toggle(0)}>
              Perfil
            </button>
            <button className="btn btn-nav-profile" onClick={() => toggle(1)}>
              Editar Perfil
            </button>
          </div>
        </div>
        {/** Contenido del perfil, datos o editar */}
        {enable === 0 && (
          <DataProfile
            picture={user.picture}
            name={user.name}
            email={user.email}
            given_name={user.given_name}
            family_name={user.family_name}
          />
        )}
        {enable === 1 && (
          <EditProfile
            given_name={user.given_name}
            family_name={user.family_name}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
