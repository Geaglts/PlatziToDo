import "./TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter--title">{`Has completado ${completed} de ${total} TODOs`}</h1>
  );
}

export { TodoCounter };
