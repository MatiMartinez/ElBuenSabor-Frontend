import React, { useState } from "react";
import Loading from "../Loading";
import { useAuth0 } from "../../react-auth0-spa";

import "./Profile.css";
import ImageProfile from "./DataProfile/ImageProfile";
import UserData from "./DataProfile/UserData";

const Profile = () => {
  const { loading, user, userdb } = useAuth0();

  if (loading || !userdb) {
    return <Loading />;
  }

  return (
    <div className="profile-view mb-5">
      <div className="mr-5 ml-5">
        <div className="row">
          <div className="col-3 text-center">
            <ImageProfile />
          </div>
          <div className="col-6">
            <UserData />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
