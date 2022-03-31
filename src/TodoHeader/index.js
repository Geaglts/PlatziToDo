import { cloneElement, Children } from "react";

export function TodoHeader({ children, loading }) {
  return (
    <header>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
}
