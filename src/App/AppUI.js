import { useContext } from "react";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Label } from "../components/Label";
import { TodoList } from "../features/TodoList";
import { TodoContext } from "../utils/context/TodoContext";

import { AddTodoModal } from "../features/AddTodoModal";

import { TodoSkeleton } from "../features/TodoSkeleton";

export const AppUI = ({ searchTodo }) => {
  const {
    error,
    loading,
    todos,
    searchValue,
    deleteTodo,
    completeTodo,
    modalState,
    toggleModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <Label text="A ocurrido un error al cargar los todos" />}
        {loading &&
          new Array(3).fill().map((_, key) => <TodoSkeleton key={key} />)}
        {!loading && todos.length === 0 && (
          <Label text="Crea tu primer ToDo 🥞" />
        )}
        {todos.filter(searchTodo(searchValue)).map((todo) => (
          <TodoItem
            key={todo._id}
            {...todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton onClick={toggleModal} />
      <AddTodoModal isOpen={modalState} onToggle={toggleModal} />
    </>
  );
};
