import "./TodoSearch.css";

function TodoSearch({ onChange, value }) {
  const onChangeSearchValue = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <input
      className="TodoSearch--input"
      type="text"
      placeholder="Buscar tarea"
      onChange={onChangeSearchValue}
      value={value}
    />
  );
}

export { TodoSearch };
