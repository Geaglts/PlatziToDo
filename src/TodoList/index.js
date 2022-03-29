import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && props.searchedTodos.length === 0 && props.onEmpty()}
      {props.searchedTodos.map(props.render)}
      <ul>{props.children}</ul>
    </div>
  );
}

export { TodoList };
