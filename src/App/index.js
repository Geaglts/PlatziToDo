import { TodoProvider } from "../TodoContext";

import { AppUI } from "./AppUI";

// Función para filtrar los TODOs
const searchTodo =
  (searchValue) =>
  ({ todo }) => {
    return String(todo).toLowerCase().includes(searchValue.toLowerCase());
  };

function App() {
  return (
    <TodoProvider>
      <AppUI searchTodo={searchTodo} />
    </TodoProvider>
  );
}

export default App;
