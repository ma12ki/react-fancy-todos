import Immutable from 'seamless-immutable';
import { ReduceStore } from 'flux/utils';

import routerHelper from '../../utils/routerHelper';
import TodoSearchActionTypes from './TodoSearchActionTypes';
import TodoDispatcher from '../todos/TodoDispatcher';

class TodoSearchStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    let { showDone, searchString } = routerHelper.getCurrentLocation().query;

    if (typeof showDone === 'undefined' && typeof searchString === 'undefined') {
      showDone = true;
      searchString = '';

      routerHelper.mergeQueryParams({
        showDone,
        searchString
      });
    }

    return {
      searchParams: {
        showDone: new Boolean(showDone).valueOf(),
        searchString
      }
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoSearchActionTypes.SEARCH_BY_NAME:
        routerHelper.mergeQueryParams({
          searchString: action.name
        });

        return {
          ...state,
          searchParams: {
            ...state.searchParams,
            searchString: action.name
          }
        };
      case TodoSearchActionTypes.SEARCH_BY_DONE:
        routerHelper.mergeQueryParams({
          showDone: action.done
        });

        return {
          ...state,
          searchParams: {
            ...state.searchParams,
            showDone: action.done
          }
        };
      default:
        return state;
    }
  }
}

export default new TodoSearchStore();
