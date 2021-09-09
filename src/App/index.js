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

function useLocalStorage(itemName, initialState) {
  const localStorageValue = localStorage.getItem(itemName);
  let parsedValue;

  if (!localStorageValue) {
    localStorage.setItem(itemName, JSON.stringify(initialState));
    parsedValue = initialState;
  } else {
    parsedValue = JSON.parse(localStorageValue);
  }

  const [value, setValues] = useState(parsedValue);

  const saveValue = (newValue) => {
    const stringifiedValue = JSON.stringify(newValue);
    localStorage.setItem(itemName, stringifiedValue);
    setValues(newValue);
  };

  return [value, saveValue];
}

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
