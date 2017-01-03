import React, { Component } from 'react';
import { Container } from 'flux/utils';

import CategoryListContainer from './CategoryListContainer';
import CategoryStore from '../../../data/categories/CategoryStore';

class CategoryListTaskContainer extends Component {
  static getStores() {
    return [CategoryStore];
  }

  static calculateState(prevState) {
    return {
      items: getNestedCategories()
    };
  }

  render() {
    return <CategoryListContainer items={this.state.items} />;
  }
}

function getNestedCategories(parentId) {
  return CategoryStore.getListByParentId(parentId).map((category) => {
    return {
      ...category,
      children: getNestedCategories(category.id)
    };
  });
}

export default Container.create(CategoryListTaskContainer);
