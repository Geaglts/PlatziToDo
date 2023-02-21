import { createPortal } from "react-dom";
import { IconSquareX } from "@tabler/icons-react";
import styles from "./Modal.module.css";

export default function Modal({ children, label, state, toggleModal }) {
  if (!state) return null;
  return createPortal(
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          {label && <h2>{label}</h2>}
          <IconSquareX
            size={35}
            onClick={toggleModal}
            className={styles.button__close}
          />
        </div>
        <div className={styles.content__div}>{children}</div>
      </div>
    </section>,
    document.getElementById("modal")
  );
}
