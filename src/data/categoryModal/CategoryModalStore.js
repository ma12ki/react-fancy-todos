import Immutable from 'seamless-immutable';
import { ReduceStore } from 'flux/utils';

import CategoryModalActionTypes from './CategoryModalActionTypes';
import CategoryModalDispatcher from './CategoryModalDispatcher';
import CategoryActions from '../categories/CategoryActions';

class CategoryModalStore extends ReduceStore {
  constructor() {
    super(CategoryModalDispatcher);
  }

  getInitialState() {
    return {
      open: false,
      category: Immutable({})
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case CategoryModalActionTypes.OPEN:
        return {
          ...state,
          open: true,
          category: action.category
        };
      case CategoryModalActionTypes.CLOSE:
        return {
          ...state,
          open: false
        };
      case CategoryModalActionTypes.SAVE_CATEGORY:
        if (action.category.id) {
          CategoryActions.updateCategory(action.category);
        } else {
          CategoryActions.addCategory(action.category.name, action.category.parentId);
        }

        return {
          ...state,
          category: action.category,
          open: false
        };
      default:
        return state;
    }
  }
}

export default new CategoryModalStore();
