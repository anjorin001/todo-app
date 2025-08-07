import { useEffect, useState } from "react";

const useLocalStorage = (key, initiateValue = []) => {

    const [value, setValue] = useState( () => {
        try {
          const stored = window.localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initiateValue;
        } catch (error) {
          console.error('Error reading local storage', error);
          return initiateValue;
        }
    });

    useEffect( () => {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.error('Error saving to local storage', error)
        }
    }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;