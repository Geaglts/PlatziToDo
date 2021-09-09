import { useState } from "react";

import { AppUI } from "./AppUI";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { TODOS_STORAGE, deafultTodo } from "./defaultValues";

// Función para filtrar los TODOs
const searchTodo =
  (searchValue) =>
  ({ todo }) => {
    return String(todo).toLowerCase().includes(searchValue.toLowerCase());
  };

function App() {
  const [todos, saveTodos] = useLocalStorage(TODOS_STORAGE, [deafultTodo]);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

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
