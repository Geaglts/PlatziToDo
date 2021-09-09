import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
