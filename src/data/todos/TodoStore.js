import Immutable from 'seamless-immutable';
import { ReduceStore } from 'flux/utils';

import routerHelper from '../../utils/routerHelper';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import TodoDAO from './TodoDAO';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    const queryParams = routerHelper.getCurrentLocation().query;

    return {
      searchParams: {
        showDone: queryParams.showDone,
        searchString: queryParams.searchString
      },
      selectedTodoId: null,
      todos: Immutable([])
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, TodoDAO.create(action.name, action.categoryId)].sort((a, b) => a.id - b.id).reverse()
        };
      case TodoActionTypes.SELECT_TODO:
        return {
          ...state,
          selectedTodoId: action.id
        };
      default:
        return state;
    }
  }
}

export default new TodoStore();
