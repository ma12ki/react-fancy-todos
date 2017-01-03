import Immutable from 'seamless-immutable';
import { ReduceStore } from 'flux/utils';

import routerHelper from '../../utils/routerHelper';
import CategoryActionTypes from './CategoryActionTypes';
import CategoryDispatcher from './CategoryDispatcher';
import CategoryDAO from './CategoryDAO';
import TodoActions from '../todos/TodoActions';

class CategoryStore extends ReduceStore {
  constructor() {
    super(CategoryDispatcher);
  }

  getInitialState() {
    const queryParams = routerHelper.getCurrentLocation().query;

    return {
      selectedCategoryId: queryParams.selectedCategoryId,
      categories: Immutable([])
    };
  }

  getListByParentId(parentId) {
    return CategoryDAO.getListByParentId(parentId);
  }

  reduce(state, action) {
    switch (action.type) {
      case CategoryActionTypes.ADD_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, CategoryDAO.create(action.name, action.parentId)].sort((a, b) => a.id - b.id).reverse()
        };
      case CategoryActionTypes.DELETE_CATEGORY:
        const categoriesToDelete = state.categories.reduce((ids, category) => {
          if (ids.includes(category.parentId)) {
            ids.push(category.id);
          }
          return ids;
        }, [action.id]);

        const selectedCategoryId = categoriesToDelete.includes(state.selectedCategoryId) ? null : state.selectedCategoryId;
        routerHelper.mergeQueryParams({
          selectedCategoryId
        });

        TodoActions.deleteTodosByCategories(...categoriesToDelete);

        return {
          ...state,
          selectedCategoryId,
          categories: state.categories.filter((category) => {
            return !categoriesToDelete.includes(category.id);
          })
        };
      case CategoryActionTypes.SELECT_CATEGORY:
        routerHelper.mergeQueryParams({
          selectedCategoryId: action.id
        });

        return {
          ...state,
          selectedCategoryId: action.id
        };
      default:
        return state;
    }
  }
}

export default new CategoryStore();
