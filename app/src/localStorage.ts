const PRESISTED_STATE = "state";

export const setState = (data: object) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(PRESISTED_STATE, serializedState);
  } catch (e) {
    //ignore error
  }
};
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PRESISTED_STATE);
    if (serializedState) return JSON.parse(serializedState);
    return undefined;
  } catch (e) {
    console.log(e);
  }
};
