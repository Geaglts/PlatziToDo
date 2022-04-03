import "./ChangeAlert.css";
import { Modal } from "../Modal";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { storageChange: show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <Modal blocked={true} state={show}>
        <div className="ChangeAlert_Container">
          <p className="ChangeAlert_Message">
            Parece que ocurrieron cambios en otra pestaña del navegador
          </p>
          <p className="ChangeAlert_Message-small">
            Te sugerimos que actualices tu información
          </p>
          <button className="ChangeAlert_RefreshButton" onClick={toggleShow}>
            Actualizar
          </button>
        </div>
      </Modal>
    );
  }

  return null;
}

export { ChangeAlert };
