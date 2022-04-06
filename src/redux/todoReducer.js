const ADD_TASK = 'ADD_TASK';

const initialState = {
  tasks: [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,

      }

    default:
      return state;
  }
}

export const addTodoActionCreator = (value) => ({type: ADD_TASK, payload: value});

export default todoReducer;