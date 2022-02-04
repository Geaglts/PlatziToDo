// Función para filtrar los TODOs
export const searchTodo = function (searchedValue) {
  return ({ todo }) => {
    return String(todo).toLowerCase().includes(searchedValue.toLowerCase());
  };
};
