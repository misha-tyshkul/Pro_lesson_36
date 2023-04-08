import { ADD_TODO, DELETE_TODO } from "../actions/todo";

const initialState = {
  todos: [],
};

export default function todoReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos[action.payload].completed = !newTodos[action.payload].completed;
      return {
        ...state,
        todos: newTodos,
      };
    default: {
      return state;
    }
  }
}
