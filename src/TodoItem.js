function TodoItem({ completed, todo }) {
  return (
    <div>
      <p>{completed ? "Completado" : "Pendiente"}</p>
      <p>{todo}</p>
      <p>Borrar todo</p>
    </div>
  );
}

export { TodoItem };
