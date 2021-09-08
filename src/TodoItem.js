import "./TodoItem.css";

function TodoItem({ _id, completed, todo, deleteTodo }) {
  const onComplete = () => {
    alert("Tarea completada");
  };
  const onDelete = () => {
    deleteTodo(_id);
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
      <p className={`TodoItem--Todo ${completed && "underline"}`}>{todo}</p>
      <span className="TodoItem--Delete" onClick={onDelete}>
        X
      </span>
    </div>
  );
}

export { TodoItem };
