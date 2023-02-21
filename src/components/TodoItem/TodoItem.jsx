import { IconX } from "@tabler/icons-react";
import classnames from "../../utils/functions/classnames";
import styles from "./TodoItem.module.css";

export default function TodoItem({
  _id,
  completed,
  todo,
  deleteTodo,
  completeTodo,
}) {
  const statusClass = completed ? "completed" : "no-completed";
  const underlineClass = completed && styles["underline"];

  return (
    <section className={styles.container}>
      <div
        className={classnames(styles.status, styles[statusClass])}
        onClick={() => completeTodo(_id)}
      />
      <p className={classnames(styles.todo, underlineClass)}>{todo}</p>
      <div className={styles.close}>
        <IconX onClick={() => deleteTodo(_id)} />
      </div>
    </section>
  );
}
