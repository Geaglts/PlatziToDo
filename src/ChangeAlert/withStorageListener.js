import { useState, useEffect } from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onChangeStorage = (changes) => {
        if (changes.key === "TODOS_V1") {
          setStorageChange(true);
        }
      };
      window.addEventListener("storage", onChangeStorage);

      return () => {
        window.removeEventListener("storage", onChangeStorage);
      };
    }, []);

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
