import { useContext } from "react";
import { TodoContext } from "../../utils/context/TodoContext";
import style from "./TodoCounter.module.css";

export default function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className={style.title}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
}
