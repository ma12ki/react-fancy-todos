import Immutable from 'seamless-immutable';
import { ReduceStore } from 'flux/utils';

import TodoToEditActionTypes from './TodoToEditActionTypes';
import TodoToEditDispatcher from './TodoToEditDispatcher';
import TodoActions from '../todos/TodoActions';

class TodoToEditStore extends ReduceStore {
  constructor() {
    super(TodoToEditDispatcher);
  }

  getInitialState() {
    return {
      todo: Immutable({})
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoToEditActionTypes.SET_TODO:
        return {
          ...state,
          todo: action.todo
        };
      case TodoToEditActionTypes.UPDATE_TODO:
        return {
          ...state,
          todo: {
            ...state.todo,
            ...action.todo
          }
        };
      case TodoToEditActionTypes.PERSIST_TODO:
        TodoActions.updateTodo(state.todo);
        return { ...state };
      case TodoToEditActionTypes.MOVE_TO_CATEGORY:
        TodoActions.updateTodo({
          ...state.todo,
          categoryId: action.categoryId
        });
        return {
          ...state,
          todo: {
            ...state.todo,
            categoryId: action.categoryId
          }
        };
      default:
        return state;
    }
  }
}

export default new TodoToEditStore();
