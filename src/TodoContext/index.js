import React, { useState } from "react";
import { _id } from "../utils/_id";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { STORAGE_NAMES } from "../Constants/storageNames";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    value: todos,
    saveValue: saveTodos,
    loading,
    error,
  } = useLocalStorage(STORAGE_NAMES.TODOS, []);
  const [searchValue, setSearchValue] = useState("");
  const [modalState, setModalState] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Cambia el estado del modal
  const toggleModal = () => {
    setModalState(!modalState);
  };

  // Agreagar un nuevo TODO
  const addTodo = (todoText) => {
    try {
      const generatedId = _id();
      const newTodo = { todo: todoText, completed: false, _id: generatedId };
      saveTodos([...todos, newTodo]);
    } catch (error) {
      console.log(error);
    }
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
    <TodoContext.Provider
      value={{
        todos,
        saveTodos,
        loading,
        error,
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
