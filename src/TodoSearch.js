import { useState } from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = useState("");

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
