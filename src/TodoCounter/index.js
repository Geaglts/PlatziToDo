import "./TodoCounter.css";

function TodoCounter({ completed = 0, total = 0 }) {
  return (
    <h1 className="TodoCounter--title">{`Has completado ${completed} de ${total} TODOs`}</h1>
  );
}

export { TodoCounter };
