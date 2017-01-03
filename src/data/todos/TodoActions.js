import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import CategoryStore from '../categories/CategoryStore';

const Actions = {
  addTodo(name, categoryId) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      name,
      categoryId: categoryId || CategoryStore.getState().selectedCategoryId
    });
  },
  updateTodo(todo) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.UPDATE_TODO,
      todo
    });
  },
  deleteTodosByCategories(...ids) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODOS_BY_CATEGORIES,
      ids
    });
  },
  setCompleted(id, completed) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.SET_COMPLETED,
      id,
      completed
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
