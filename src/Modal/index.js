import "./Modal.css";
import { createPortal } from "react-dom";

function Modal({ children, state, toggleModal }) {
  if (!state) return null;
  return createPortal(
    <div className="Modal__Container">
      <div className="Modal__Content">
        <button onClick={toggleModal} className="Modal__Button--close">
          X
        </button>
        <div className="Modal__Content--div">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
