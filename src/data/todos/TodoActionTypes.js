import keymirror from 'keymirror';

const ActionTypes = keymirror({
  ADD_TODO: null,
  UPDATE_TODO: null,
  DELETE_TODO: null,
  DELETE_TODOS_BY_CATEGORIES: null,
  SELECT_TODO: null,
  SET_COMPLETED: null
});

export default ActionTypes;
