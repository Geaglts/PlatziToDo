import { useState } from "react";

function useLocalStorage(itemName, initialState) {
  const localStorageValue = localStorage.getItem(itemName);
  let parsedValue;

  if (!localStorageValue) {
    localStorage.setItem(itemName, JSON.stringify(initialState));
    parsedValue = initialState;
  } else {
    parsedValue = JSON.parse(localStorageValue);
  }

  const [value, setValues] = useState(parsedValue);

  const saveValue = (newValue) => {
    const stringifiedValue = JSON.stringify(newValue);
    localStorage.setItem(itemName, stringifiedValue);
    setValues(newValue);
  };

  return [value, saveValue];
}

export { useLocalStorage };
