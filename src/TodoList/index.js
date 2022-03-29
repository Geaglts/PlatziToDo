import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && props.todos.length === 0 && props.onEmpty()}
      {props.todos
        .filter(props.searchTodo(props.searchValue))
        .map(props.render)}
      <ul>{props.children}</ul>
    </div>
  );
}

export { TodoList };
