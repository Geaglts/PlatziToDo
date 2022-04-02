import "./ChangeAlert.css";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show = false, toggleShow = () => {} }) {
  if (show) {
    return (
      <div className="ChangeAlert_Container">
        <p className="ChangeAlert_Message">Hay cambios en los datos</p>
        <button className="ChangeAlert_RefreshButton" onClick={toggleShow}>
          Recargar la pagina
        </button>
      </div>
    );
  }

  return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
