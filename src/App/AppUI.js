import { useContext, useState } from "react";

import { TodoHeader } from "../TodoHeader";
import { searchTodo } from "../utils/filterTodo";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

// mook
import { TodoSkeleton } from "../Skeletons/TodoSkeleton";

const P = ({ message }) => {
  return <p style={{ color: "white", textAlign: "center" }}>{message}</p>;
};

export const AppUI = () => {
  const {
    error,
    loading,
    todos,
    deleteTodo,
    completeTodo,
    modalState,
    toggleModal,
    totalTodos,
    completedTodos,
  } = useContext(TodoContext);
  const [searchedValue, setSearchedValue] = useState("");

  return (
    <>
      {/* Ejemplo de composición de componentes */}
      <TodoHeader>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch onChange={setSearchedValue} value={searchedValue} />
      </TodoHeader>
      <TodoList>
        {error && <P message="A ocurrido un error al cargar los todos" />}
        {loading &&
          new Array(3).fill().map((index, key) => <TodoSkeleton key={key} />)}
        {!loading && todos.length === 0 && (
          <P message="Crea tu primer TODO :D" />
        )}
        {todos.filter(searchTodo(searchedValue)).map((todo) => (
          <TodoItem
            key={todo._id}
            {...todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </TodoList>
      <Modal state={modalState} toggleModal={toggleModal}>
        <TodoForm />
      </Modal>
      <CreateTodoButton onClick={toggleModal} />
    </>
  );
};
