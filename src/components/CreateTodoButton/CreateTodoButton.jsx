import { IconPlaylistAdd } from "@tabler/icons-react";
import styles from "./CreateTodoButton.module.css";

export default function CreateTodoButton({ onClick }) {
  return (
    <div className={styles.container}>
      <button className={styles.content} onClick={onClick}>
        <IconPlaylistAdd />
      </button>
    </div>
  );
}
