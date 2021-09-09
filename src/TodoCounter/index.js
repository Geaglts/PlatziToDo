import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } =
    useContext(TodoContext);

  return (
    <h1 className="TodoCounter--title">{`Has completado ${completed} de ${total} TODOs`}</h1>
  );
}

export { TodoCounter };
