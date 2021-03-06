import {sortedByStatus} from "../components/Utils/sortedByStatus";

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const FILTERED_TASKS = 'FILTERED_TASKS'

const state = localStorage.getItem("tasks");

const initialState = {
  tasks: state ? JSON.parse(state) : [],
  typeValue: '',
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: sortedByStatus(state.tasks.concat(action.payload))
      }

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: sortedByStatus(state.tasks.map(task => task.id === action.payload ? {...task, status: !task.status} : task)),
      }

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.taskId ? {...task, name: action.newTaskName} : task)
      }

    case FILTERED_TASKS:
      return {
        ...state,
        typeValue: action.payload
      }

    default:
      return state;
  }
}

export const addTodoActionCreator = (task) => ({type: ADD_TASK, payload: task});
export const removeTodoActionCreator = (taskId) => ({type: REMOVE_TASK, payload: taskId});
export const toggleStatusCreator = (taskId) => ({type: TOGGLE_TASK, payload: taskId});
export const editActionCreator = (taskId, newTaskName) => ({type: EDIT_TASK, taskId, newTaskName});
export const filteredActionCreator = (type) => ({type: FILTERED_TASKS, payload: type})


export default todoReducer;