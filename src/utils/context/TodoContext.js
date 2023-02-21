import React, { useState } from "react";
import { _id } from "../functions/_id";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { STORAGE_NAMES } from "../constants/storageNames";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const todos = useLocalStorage(STORAGE_NAMES.TODOS, []);
  const [searchValue, setSearchValue] = useState("");
  const [modalState, setModalState] = useState(false);

  const completedTodos = todos.state.filter((todo) => todo.completed).length;
  const totalTodos = todos.state.length;

  // Cambia el estado del modal
  const toggleModal = () => {
    setModalState(!modalState);
  };

  // Agreagar un nuevo TODO
  const addTodo = (todoText) => {
    try {
      const generatedId = _id();
      const newTodo = { todo: todoText, completed: false, _id: generatedId };
      todos.saveValue([...todos.state, newTodo]);
    } catch (error) {
      console.log(error);
    }
  };

  // Eliminar TODO
  const deleteTodo = (id) => {
    const filteredTodos = todos.state.filter(({ _id }) => _id !== id);
    todos.saveValue(filteredTodos);
  };

  // Marcar TODO como completado
  const completeTodo = (id) => {
    const todoIndex = todos.state.findIndex(({ _id }) => _id === id);
    const updatedTodos = [...todos.state];
    updatedTodos[todoIndex].completed = !todos.state[todoIndex].completed;
    todos.saveValue(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todos.state,
        saveTodos: todos.saveValue,
        loading: todos.loading,
        error: todos.error,
        deleteTodo,
        completeTodo,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        modalState,
        toggleModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
