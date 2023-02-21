import styles from "./Label.module.css";

export default function Label({ text }) {
  return <p className={styles.text}>{text}</p>;
}
