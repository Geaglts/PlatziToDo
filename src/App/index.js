import { useTodos } from "./useTodos";

import { searchTodo } from "../utils/filterTodo";

import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";

import { CreateTodoButton } from "../CreateTodoButton";
import { Message } from "../Message";
import { Modal } from "../Modal";

// mooks
import { TodoSkeleton } from "../Skeletons/TodoSkeleton";

function App() {
  const {
    error,
    loading,
    todos,
    totalTodos,
    completedTodos,
    deleteTodo,
    completeTodo,
    addTodo,
    modalState,
    toggleModal,
    searchValue,
    setSearchValue,
  } = useTodos();

  return (
    <>
      {/* Ejemplo de composición de componentes */}
      <TodoHeader>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch onChange={setSearchValue} value={searchValue} />
      </TodoHeader>
      <TodoList>
        {error && <Message label="No se pudieron cargar los TODOs" />}
        {loading &&
          new Array(3).fill().map((key) => <TodoSkeleton key={key} />)}
        {!loading && todos.length === 0 && (
          <Message label="Crea tu primer TODO 🌞" />
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
      <Modal state={modalState} toggleModal={toggleModal}>
        <TodoForm addTodo={addTodo} />
      </Modal>
      <CreateTodoButton onClick={toggleModal} />
    </>
  );
}

export default App;
