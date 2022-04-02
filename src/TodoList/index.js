import "./TodoList.css";

// Example with render props
function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <div className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && props.totalTodos === 0 && props.onEmpty()}
      {!props.loading &&
        props.totalTodos !== 0 &&
        props.searchedTodos.length === 0 &&
        props.onEmptySearch(props.searchValue)}
      {/* Use render function to render todos */}
      {!props.loading && props.searchedTodos.map(renderFunc)}
      {/* <ul>{props.children}</ul> */}
    </div>
  );
}

export { TodoList };
