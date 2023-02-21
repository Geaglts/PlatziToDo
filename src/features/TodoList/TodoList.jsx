import styles from "./TodoList.module.css";

export default function TodoList({ children }) {
  return <div className={styles.container}>{children}</div>;
}
