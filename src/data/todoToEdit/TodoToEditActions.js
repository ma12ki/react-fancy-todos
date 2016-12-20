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
  }
};

export default Actions;
