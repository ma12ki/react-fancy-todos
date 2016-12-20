import Immutable from 'seamless-immutable';
import { ReduceStore } from 'flux/utils';

import TodoToEditActionTypes from './TodoToEditActionTypes';
import TodoToEditDispatcher from './TodoToEditDispatcher';

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
      case TodoToEditActionTypes.EDIT_TODO:
        return {
          ...state,
          todo: action.todo
        };
      default:
        return state;
    }
  }
}

export default new TodoToEditStore();
