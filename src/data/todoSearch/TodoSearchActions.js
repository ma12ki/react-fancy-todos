import TodoSearchActionTypes from './TodoSearchActionTypes';
import TodoDispatcher from '../todos/TodoDispatcher';

const Actions = {
  searchByName(name) {
    TodoDispatcher.dispatch({
      type: TodoSearchActionTypes.SEARCH_BY_NAME,
      name
    });
  },
  searchByDone(done) {
    TodoDispatcher.dispatch({
      type: TodoSearchActionTypes.SEARCH_BY_DONE,
      done
    });
  }
};

export default Actions;
