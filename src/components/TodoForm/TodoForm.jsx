import { useContext, useState } from "react";
import { TodoContext } from "../../utils/context/TodoContext";
import { Button } from "../Button";
import styles from "./TodoForm.module.css";

export default function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (todo.length !== 0) {
      addTodo(todo);
      setTodo("");
    }
  };

  const onChangeTodoText = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form className={styles.container} onSubmit={onSubmitForm}>
      <textarea
        placeholder="Puedes escribir tu tarea aquí"
        onChange={onChangeTodoText}
        value={todo}
        className={styles.textarea}
      />
      <Button label="Agregar" styleButton="primary" />
    </form>
  );
}
