//import "./App.css";
// custom components
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// mook todos
const todos = [
  { todo: "Este es mi primer todo", completed: false },
  { todo: "Este es mi segundo todo", completed: true },
  { todo: "Este es mi tercer todo", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
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
