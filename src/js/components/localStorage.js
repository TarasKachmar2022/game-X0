export function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    const storegObj =
      serializedState === null ? undefined : JSON.parse(serializedState);

    return storegObj;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
