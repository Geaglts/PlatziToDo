import { cloneElement, Children } from "react";

export function TodoHeader({ children, loading }) {
  return (
    <header>
      {/* Use of Children and cloneElement */}
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
}
