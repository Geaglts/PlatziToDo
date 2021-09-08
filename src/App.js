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
  { todo: "Este es mi primer todo", completed: false },
  { todo: "Este es mi segundo todo", completed: true },
  { todo: "Este es mi segundo todo", completed: true },
  {
    todo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem et doloribus doloremque provident aperiam similique, accusantium commodi dolor molestias iusto ratione repellendus maiores natus animi rerum asperiores facilis assumenda itaque.",
    completed: false,
  },
];

function App() {
  const [todos] = useState(mookTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {todos.map((todo, key) => (
          <TodoItem key={key} {...todo} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
