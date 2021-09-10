import "./TodoSkeleton.css";

function TodoSkeleton() {
  return (
    <div className="TodoSkeleton">
      <div className="TodoSkeleton__Status"></div>
      <div className="TodoSkeleton__Text">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="TodoSkeleton__Close">
        <button>x</button>
      </div>
    </div>
  );
}

export { TodoSkeleton };
