import CategoryModalActionTypes from './CategoryModalActionTypes';
import CategoryModalDispatcher from './CategoryModalDispatcher';

const Actions = {
  open(category) {
    CategoryModalDispatcher.dispatch({
      type: CategoryModalActionTypes.OPEN,
      category
    });
  },
  close() {
    CategoryModalDispatcher.dispatch({
      type: CategoryModalActionTypes.CLOSE
    });
  },
  saveCategory(category) {
    CategoryModalDispatcher.dispatch({
      type: CategoryModalActionTypes.SAVE_CATEGORY,
      category
    });
  }
};

export default Actions;
