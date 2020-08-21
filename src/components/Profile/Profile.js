import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { useAuth0 } from "../../react-auth0-spa";

import "./Profile.css";
import ImageProfile from "./DataProfile/ImageProfile";
import UserData from "./DataProfile/UserData";
import Addresses from "./DataProfile/Addresses";
import { getUsuarioByEmail } from "../../API/ApiUsuario";

const Profile = () => {
  const { loading, user } = useAuth0();
  const [userdb, setUserdb] = useState();

  // Re-render
  const [reload, setReload] = useState(true);

  function toggleReload() {
    setReload(!reload);
  }

  useEffect(() => {
    async function getUser() {
      const data = await getUsuarioByEmail(user.email);
      setUserdb(data);
    }
    if (reload === true) {
      getUser();
      toggleReload();
    }
    // eslint-disable-next-line
  }, [reload]);

  if (loading || !userdb) {
    return <Loading />;
  }

  return (
    <div className="profile-view mb-5">
      <div className="mr-5 ml-5">
        <div className="row">
          <div className="col-xl-4 col-md-4 col-sm-12 text-center">
            <ImageProfile />
            <hr />
          </div>
          <div className="col-xl-6 col-md-8 col-sm-12">
            <UserData toggleReload={toggleReload} userdb={userdb} />
            <hr />
            <Addresses toggleReload={toggleReload} userdb={userdb} />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
