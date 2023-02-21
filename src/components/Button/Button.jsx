import classnames from "../../utils/functions/classnames";
import styles from "./Button.module.css";

export default function Button({ label, styleButton, classes = [], ...rest }) {
  return (
    <button
      className={classnames(styles.container, styles[styleButton], ...classes)}
      {...rest}
    >
      {label}
    </button>
  );
}
