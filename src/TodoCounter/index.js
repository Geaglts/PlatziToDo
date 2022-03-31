import "./TodoCounter.css";

function TodoCounter({ completed = 0, total = 0, loading }) {
  return (
    <h1
      className={`TodoCounter--title ${loading && "TodoCounter--loading"}`}
    >{`Has completado ${completed} de ${total} TODOs`}</h1>
  );
}

export { TodoCounter };
