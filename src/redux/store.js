import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";
import photoReducer from "./photoReducer";

function loadFromLocalStorage() {
  try {
    const state = localStorage.getItem("localState");
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const reducers = combineReducers({
  todo: todoReducer,
  photos: photoReducer,
})

const store = createStore(reducers, loadFromLocalStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;