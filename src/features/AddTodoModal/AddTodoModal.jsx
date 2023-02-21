import { Modal } from "../../components/Modal";
import { TodoForm } from "../../components/TodoForm";

export default function AddTodoModal({ isOpen, onToggle }) {
  return (
    <Modal label="Que haras ahora?" state={isOpen} toggleModal={onToggle}>
      <TodoForm />
    </Modal>
  );
}
