import { useState, useEffect } from "react";

export function useLocalStorage(key, value) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(value);

  useEffect(() => {
    try {
      const localStorageValue = localStorage.getItem(key);
      let parsedValue;
      if (!localStorageValue) {
        localStorageValue(key, JSON.stringify(value));
        parsedValue = value;
      } else {
        parsedValue = JSON.parse(localStorageValue);
      }
      setState(parsedValue);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  const saveValue = (newValue) => {
    try {
      const stringValue = JSON.stringify(newValue);
      localStorage.setItem(key, stringValue);
      setState(newValue);
    } catch (error) {
      setError(error.message);
    }
  };

  return { state, loading, error, saveValue };
}
