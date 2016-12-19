import CategoryActionTypes from './CategoryActionTypes';
import CategoryDispatcher from './CategoryDispatcher';

const Actions = {
  addCategory(name) {
    CategoryDispatcher.dispatch({
      type: CategoryActionTypes.ADD_CATEGORY,
      name
    });
  },
  selectCategory(id) {
    CategoryDispatcher.dispatch({
      type: CategoryActionTypes.SELECT_CATEGORY,
      id
    });
  }
};

export default Actions;
