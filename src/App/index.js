import { useState } from "react";

import { AppUI } from "./AppUI";

// mook todos
const mookTodos = [
  { _id: "1", todo: "Este es mi primer todo", completed: false },
  { _id: "2", todo: "Este es mi segundo todo", completed: true },
  { _id: "3", todo: "Este es mi segundo todo", completed: false },
  { _id: "4", todo: "Este es mi tercer todo", completed: true },
];

const searchTodo =
  (searchValue) =>
  ({ todo }) => {
    return String(todo).toLowerCase().includes(searchValue.toLowerCase());
  };

function App() {
  const [todos, setTodos] = useState(mookTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Eliminar TODO
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(({ _id }) => _id !== id);
    setTodos(filteredTodos);
  };

  // Marcar TODO como completado
  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(({ _id }) => _id === id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = !todos[todoIndex].completed;
    setTodos(updatedTodos);
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
