import { useContext } from "react";
import { TodoContext } from "../../utils/context/TodoContext";
import styles from "./TodoSearch.module.css";

export default function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onChangeSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Buscar tarea"
      onChange={onChangeSearchValue}
      value={searchValue}
    />
  );
}
