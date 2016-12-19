import Counter from '../../utils/counter';

const categoryCounter = new Counter();

const create = (name) => {
  return {
    id: categoryCounter.next(),
    name,
    children: []
  };
};

export default {
  create
};
