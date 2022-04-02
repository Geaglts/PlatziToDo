import { useState, useEffect } from "react";

function useLocalStorage(valueName, initialValue) {
  const [isSincronized, setIsSincronized] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValues] = useState(initialValue);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      try {
        // Obtiene los datos del estado local
        const localStorageValue = localStorage.getItem(valueName);
        let parsedValue;

        if (!localStorageValue) {
          localStorage.setItem(valueName, JSON.stringify(initialValue));
          parsedValue = initialValue;
        } else {
          parsedValue = JSON.parse(localStorageValue);
        }

        setValues(parsedValue);
        setLoading(false);
        setIsSincronized(true);
      } catch (error) {
        setError(error);
      }
    }, 2000);
    return () => clearTimeout(timeOutId);
  }, [isSincronized]);

  // Guarda un valor en el estado local
  const saveValue = (newValue) => {
    try {
      const stringifiedValue = JSON.stringify(newValue);
      localStorage.setItem(valueName, stringifiedValue);
      setValues(newValue);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeStorage = () => {
    setLoading(true);
    setIsSincronized(false);
  };

  return { value, loading, error, sincronizeStorage, saveValue };
}

export { useLocalStorage };
