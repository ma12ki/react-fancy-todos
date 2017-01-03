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
  selectCategory(id) {
    CategoryDispatcher.dispatch({
      type: CategoryActionTypes.SELECT_CATEGORY,
      id
    });
  }
};

export default Actions;
