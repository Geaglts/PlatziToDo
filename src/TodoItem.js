import "./TodoItem.css";

function TodoItem({ completed, todo }) {
  const onComplete = () => {
    alert("Tarea completada");
  };
  const onDelete = () => {
    alert("Tarea eliminada");
  };

  return (
    <div className="TodoItem">
      <span
        className={`
          TodoItem--Status
          ${completed ? "completed" : "not-completed"}
        `}
        onClick={onComplete}
      />
      <p className="TodoItem--Todo">{todo}</p>
      <span className="TodoItem--Delete" onClick={onDelete}>
        X
      </span>
    </div>
  );
}

export { TodoItem };
