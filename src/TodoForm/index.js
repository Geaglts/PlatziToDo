import { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
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
    <form className="TodoForm" onSubmit={onSubmitForm}>
      <h1>Que haras ahora?</h1>
      <textarea
        placeholder="Puedes escribir tu tarea aquí"
        onChange={onChangeTodoText}
        value={todo}
      ></textarea>
      <button>Agregar</button>
    </form>
  );
}

export { TodoForm };
