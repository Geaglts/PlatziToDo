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
  {
    todo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem et doloribus doloremque provident aperiam similique, accusantium commodi dolor molestias iusto ratione repellendus maiores natus animi rerum asperiores facilis assumenda itaque.",
    completed: false,
  },
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
