import React from "react";
import { useAuth0 } from "../../../react-auth0-spa";

export default function ImageProfile() {
  const { user, userdb } = useAuth0();

  return (
    <div className="bg-image-profile p-4">
      <img
        src={user.picture}
        className="rounded-circle img-fluid image-profile-user"
        alt="user-img"
      />
      <h6 className="text-bold mt-3">{userdb.email}</h6>
      <button className="btn btn-outline-secondary w-100 mt-3">
        <i className="fas fa-camera mr-2"></i>Subir
      </button>
    </div>
  );
}
