import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

export const AppUI = ({
  todos,
  searchTodo,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  deleteTodo,
  completeTodo,
}) => (
  <>
    <TodoCounter completed={completedTodos} total={totalTodos} />
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    <TodoList>
      {todos.filter(searchTodo(searchValue)).map((todo, key) => (
        <TodoItem
          key={todo._id}
          {...todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </TodoList>
    <CreateTodoButton />
  </>
);
