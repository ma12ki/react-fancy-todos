import TodoToEditActionTypes from './TodoToEditActionTypes';
import TodoToEditDispatcher from './TodoToEditDispatcher';
import TodoDAO from '../todos/TodoDAO';

const Actions = {
  setTodo(id) {
    const todo = TodoDAO.getById(id);

    TodoToEditDispatcher.dispatch({
      type: TodoToEditActionTypes.SET_TODO,
      todo
    });
  },
  updateTodo(todo) {
    TodoToEditDispatcher.dispatch({
      type: TodoToEditActionTypes.UPDATE_TODO,
      todo
    });
  },
  persistTodo() {
    TodoToEditDispatcher.dispatch({
      type: TodoToEditActionTypes.PERSIST_TODO
    });
  },
  moveToCategory(categoryId) {
    TodoToEditDispatcher.dispatch({
      type: TodoToEditActionTypes.MOVE_TO_CATEGORY,
      categoryId
    })
  }
};

export default Actions;
