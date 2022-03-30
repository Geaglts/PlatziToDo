import { useTodos } from "./useTodos";

import { newArray } from "../utils/arrays";

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
    totalTodos,
    completedTodos,
    modalState,
    searchValue,
    searchedTodos,
    deleteTodo,
    completeTodo,
    addTodo,
    toggleModal,
    setSearchValue,
  } = useTodos();

  return (
    <>
      {/* Ejemplo de composición de componentes */}
      <TodoHeader>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch onChange={setSearchValue} value={searchValue} />
      </TodoHeader>
      {/* Example with render props */}
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <Message label="No se pudieron cargar los TODOs" />}
        onLoading={() => newArray(3).map((key) => <TodoSkeleton key={key} />)}
        onEmpty={() => <Message label="Crea tu primer TODO 🌞" />}
        onEmptySearch={(searchValue) => (
          <Message label={`No se encontraron tareas con ${searchValue} 🎭`} />
        )}
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
