import "./TodoSearch.css";

function TodoSearch() {
  const onChangeInputValue = (evt) => {
    console.log(evt.target.value);
  };

  return (
    <input
      className="TodoSearch--input"
      type="text"
      placeholder="Buscar tarea"
      onChange={onChangeInputValue}
    />
  );
}

export { TodoSearch };
