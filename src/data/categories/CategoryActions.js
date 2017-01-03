import CategoryActionTypes from './CategoryActionTypes';
import CategoryDispatcher from './CategoryDispatcher';

const Actions = {
  addCategory(name, parentId) {
    CategoryDispatcher.dispatch({
      type: CategoryActionTypes.ADD_CATEGORY,
      name,
      parentId
    });
  },
  updateCategory(category) {
    CategoryDispatcher.dispatch({
      type: CategoryActionTypes.UPDATE_CATEGORY,
      category
    });
  },
  deleteCategory(id) {
    CategoryDispatcher.dispatch({
      type: CategoryActionTypes.DELETE_CATEGORY,
      id
    });
  },
  selectCategory(id) {
    CategoryDispatcher.dispatch({
      type: CategoryActionTypes.SELECT_CATEGORY,
      id
    });
  },
  toggleExpandCategory(id) {
    CategoryDispatcher.dispatch({
      type: CategoryActionTypes.TOGGLE_EXPAND_CATEGORY,
      id
    });
  }
};

export default Actions;
