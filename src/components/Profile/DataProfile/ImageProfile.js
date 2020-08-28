import React, { useState } from "react";
import Modal from "react-modal";
import { useAuth0 } from "../../../react-auth0-spa";
import InputSmall from "../../GlobalReusable/InputSmall";
import { updateUsuario } from "../../../API/ApiUsuario";

export default function ImageProfile({ toggleReload, userdb }) {
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  const [imagenPath, setImagenPath] = useState(
    userdb.imagenPath === null ? "" : userdb.imagenPath
  );

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(imagenPath);
    await updateUsuario(userdb._id, { imagenPath: imagenPath });
    toggleReload();
    toggle();
  }

  return (
    <div className="bg-image-profile p-4">
      <img
        src={
          userdb.imagenPath === null || userdb.imagenPath === ""
            ? user.picture
            : userdb.imagenPath
        }
        className="rounded-circle img-fluid image-profile-user"
        alt="user-img"
      />
      <h6 className="text-bold mt-3">{userdb.email}</h6>
      <button
        className="btn btn-outline-secondary w-100 mt-3"
        onClick={() => toggle()}
      >
        <i className="fas fa-camera mr-2"></i>Subir
      </button>
      {/** Modal para cambiar la imagen */}
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        className="modal-imagen-perfil"
        overlayClassName="modal-imagen-perfil-overlay"
      >
        <form onSubmit={handleSubmit}>
          <InputSmall
            id="imagenPath"
            label="Imagen"
            type="text"
            name="imagenPath"
            value={imagenPath}
            onChange={(e) => setImagenPath(e.target.value)}
          />
          {/** Botones del modal */}
          <div className="d-flex justify-content-center border-top mt-4">
            <div className="d-flex justify-content-around pt-3 w-50">
              <button type="submit" className="btn btn-modal w-100 m-2">
                Guardar
              </button>
              <button
                className="btn btn-modal-outline w-100 m-2"
                onClick={() => toggle()}
              >
                Cerrar
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
