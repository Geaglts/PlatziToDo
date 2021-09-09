import { useContext } from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

const P = ({ message }) => {
  return <p style={{ color: "white", textAlign: "center" }}>{message}</p>;
};

export const AppUI = ({ searchTodo }) => {
  const { error, loading, todos, searchValue, deleteTodo, completeTodo } =
    useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <P message="A ocurrido un error al cargar los todos" />}
        {loading && <P message="Cargando los TODOs..." />}
        {!loading && todos.length === 0 && (
          <P message="Crea tu primer TODO :D" />
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
      )
      <CreateTodoButton />
    </>
  );
};
