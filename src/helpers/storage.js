export const saveToLocalsStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? null : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Remove state error: ", error.message);
  }
};
