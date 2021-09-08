import { useState } from "react";

//import "./App.css";
// custom components
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// mook todos
const mookTodos = [
  { _id: "1", todo: "Este es mi primer todo", completed: false },
  { _id: "2", todo: "Este es mi segundo todo", completed: true },
  { _id: "3", todo: "Este es mi segundo todo", completed: false },
  { _id: "4", todo: "Este es mi tercer todo", completed: true },
];

const searchTodo =
  (searchValue) =>
  ({ todo }) => {
    return String(todo).toLowerCase().includes(searchValue.toLowerCase());
  };

function App() {
  const [todos, setTodos] = useState(mookTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Eliminar TODO
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(({ _id }) => _id !== id);
    setTodos(filteredTodos);
  };

  // Marcar TODO como completado
  const finishTodo = () => {
    console.log("Este TODO se ha eliminado D:");
  };
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {todos.filter(searchTodo(searchValue)).map((todo, key) => (
          <TodoItem key={todo._id} {...todo} deleteTodo={deleteTodo} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
