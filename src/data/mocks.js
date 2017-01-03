import CategoryActions from './categories/CategoryActions';
import CategoryStore from './categories/CategoryStore';
import TodoActions from './todos/TodoActions';

const init = () => {
  CategoryActions.addCategory('Category 1');
  const category1 = CategoryStore.getState().categories[0];
  CategoryActions.addCategory('Category 2', category1.id);
  CategoryActions.addCategory('Category 3', category1.id);
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
