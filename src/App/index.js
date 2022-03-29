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
      <TodoList
        error={error}
        loading={loading}
        todos={todos}
        searchTodo={searchTodo}
        searchValue={searchValue}
        onError={() => <Message label="No se pudieron cargar los TODOs" />}
        onLoading={() => new Array(3).map((key) => <TodoSkeleton key={key} />)}
        onEmpty={() => <Message label="Crea tu primer TODO 🌞" />}
        render={(todo) => (
          <TodoItem
            key={todo._id}
            {...todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        )}
      />
      <Modal state={modalState} toggleModal={toggleModal}>
        <TodoForm addTodo={addTodo} />
      </Modal>
      <CreateTodoButton onClick={toggleModal} />
    </>
  );
}

export default App;
