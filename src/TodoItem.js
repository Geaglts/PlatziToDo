import "./TodoItem.css";

function TodoItem({ completed, todo }) {
  return (
    <div className="TodoItem">
      <span
        className={`
          TodoItem--Status
          ${completed ? "completed" : "not-completed"}
        `}
      />
      <p className="TodoItem--Todo">{todo}</p>
      <p className="TodoItem--Delete">X</p>
    </div>
  );
}

export { TodoItem };
