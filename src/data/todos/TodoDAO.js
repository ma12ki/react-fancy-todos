import Counter from '../../utils/counter';

const todoCounter = new Counter();

const create = (name, categoryId) => {
  return {
    id: todoCounter.next(),
    name,
    description: '',
    completed: false,
    categoryId
  };
};

export default {
  create
};
