import { useState, useEffect } from "react";

function useStorageListener(sincronize) {
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
    sincronize();
    setStorageChange(false);
  };

  return { storageChange, toggleShow };
}

export { useStorageListener };
