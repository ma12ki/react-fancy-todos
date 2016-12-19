import Immutable from 'seamless-immutable';
import { ReduceStore } from 'flux/utils';

import routerHelper from '../../utils/routerHelper';
import CategoryActionTypes from './CategoryActionTypes';
import CategoryDispatcher from './CategoryDispatcher';
import CategoryDAO from './CategoryDAO';

class CategoryStore extends ReduceStore {
  constructor() {
    super(CategoryDispatcher);
  }

  getInitialState() {
    const queryParams = routerHelper.getCurrentLocation().query;

    return {
      selectedCategory: queryParams.selectedCategory,
      categories: Immutable([])
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case CategoryActionTypes.ADD_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, CategoryDAO.create(action.name)].sort((a, b) => a.id - b.id).reverse()
        };
      case CategoryActionTypes.SELECT_CATEGORY:
        routerHelper.mergeQueryParams({
          selectedCategory: action.id
        });

        return {
          ...state,
          selectedCategory: action.id
        };
      default:
        return state;
    }
  }
}

export default new CategoryStore();
