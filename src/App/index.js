import { useState } from "react";

import { AppUI } from "./AppUI";
import { _id } from "../utils/_id";

const searchTodo =
  (searchValue) =>
  ({ todo }) => {
    return String(todo).toLowerCase().includes(searchValue.toLowerCase());
  };

const TODOS_STORAGE = "TODOS_V1";

// El TODO se crea si aun no se ha creado ninguno
const deafultTodo = {
  _id: _id(),
  todo: "Soy tu primer todo :D, me puedes eliminar si gustas.",
  completed: false,
};

function App() {
  const localStorageTodos = localStorage.getItem(TODOS_STORAGE);
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem(TODOS_STORAGE, JSON.stringify([deafultTodo]));
    parsedTodos = [deafultTodo];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(TODOS_STORAGE, stringifiedTodos);
    setTodos(newTodos);
  };

  // Eliminar TODO
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(({ _id }) => _id !== id);
    saveTodos(filteredTodos);
  };

  // Marcar TODO como completado
  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(({ _id }) => _id === id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(updatedTodos);
  };
  return (
    <AppUI
      todos={todos}
      searchTodo={searchTodo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  );
}

export default App;
