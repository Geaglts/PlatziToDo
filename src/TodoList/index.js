import "./TodoList.css";

// Example with render props
function TodoList(props) {
  return (
    <div className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && props.totalTodos === 0 && props.onEmpty()}
      {!props.loading &&
        props.totalTodos !== 0 &&
        props.searchedTodos.length === 0 &&
        props.onEmptySearch(props.searchValue)}
      {props.searchedTodos.map(props.render)}
      <ul>{props.children}</ul>
    </div>
  );
}

export { TodoList };
