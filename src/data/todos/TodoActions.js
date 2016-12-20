import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import CategoryStore from '../categories/CategoryStore';

const Actions = {
  addTodo(name) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      name,
      categoryId: CategoryStore.getState().selectedCategory
    });
  },
  selectTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.SELECT_TODO,
      id
    });
  }
};

export default Actions;
