import "./TodoForm.css";

function TodoForm() {
  return (
    <form className="TodoForm">
      <h1>Que haras ahora?</h1>
      <textarea placeholder="Puedes escribir tu tarea aquí"></textarea>
      <button>Agregar</button>
    </form>
  );
}

export { TodoForm };
