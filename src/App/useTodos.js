import { useState, useEffect } from "react";
import { _id } from "../utils/_id";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_NAMES } from "../Constants/storageNames";

import { searchTodo } from "../utils/filterTodo";

export function useTodos() {
  const {
    value: todos,
    saveValue: saveTodos,
    loading,
    error,
  } = useLocalStorage(STORAGE_NAMES.TODOS, []);
  const [searchValue, setSearchValue] = useState("");
  const [modalState, setModalState] = useState(false);
  const [searchedTodos, setSearchedTodos] = useState([]);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Filtra los todos cuando cambia el estado del searchValue
  useEffect(() => {
    const filterTodosByName = todos.filter(searchTodo(searchValue));
    setSearchedTodos(filterTodosByName);
  }, [todos, searchValue]);

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

  return {
    loading,
    error,
    todos,
    completedTodos,
    totalTodos,
    searchValue,
    modalState,
    searchedTodos,
    saveTodos,
    deleteTodo,
    completeTodo,
    setSearchValue,
    toggleModal,
    addTodo,
  };
}
