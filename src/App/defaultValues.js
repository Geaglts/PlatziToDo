import { _id } from "../utils/_id";

export const TODOS_STORAGE = "TODOS_V1";

// El TODO se crea si aun no se ha creado ninguno
export const deafultTodo = {
  _id: _id(),
  todo: "Soy tu primer todo :D, me puedes eliminar si gustas.",
  completed: false,
};
