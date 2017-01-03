import Counter from '../../utils/counter';
import CategoryStore from './CategoryStore';

const categoryCounter = new Counter(1);

const create = (name, parentId) => {
  return {
    id: categoryCounter.next(),
    name,
    parentId
  };
};

const getListByParentId = (parentId) => {
  console.log(CategoryStore.getState());
  return CategoryStore.getState().categories.filter((category) => {
    return category.parentId === parentId || (!parentId && !category.parentId);
  });
};

export default {
  create,
  getListByParentId
};
