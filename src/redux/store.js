import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";
import photoReducer from "./photoReducer";

const reducers = combineReducers({
  todo: todoReducer,
  photos: photoReducer,
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;