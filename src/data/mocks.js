import CategoryActions from './categories/CategoryActions';
import CategoryStore from './categories/CategoryStore';
import TodoActions from './todos/TodoActions';
import TodoStore from './todos/TodoStore';

const init = () => {
  CategoryActions.addCategory('Category 1');
  CategoryActions.addCategory('Category 2');
  CategoryActions.addCategory('Category 3');
  CategoryActions.addCategory('Category 4');
  let categories = CategoryStore.getState().categories;

  categories.forEach((category) => {
    CategoryActions.selectCategory(category.id);
    TodoActions.addTodo(`Task ${category.id}_1`);
    TodoActions.addTodo(`Task ${category.id}_2`);
  });
};

export default {
  init
};
