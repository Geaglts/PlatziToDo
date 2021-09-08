import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onChangeSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <input
      className="TodoSearch--input"
      type="text"
      placeholder="Buscar tarea"
      onChange={onChangeSearchValue}
      value={searchValue}
    />
  );
}

export { TodoSearch };
