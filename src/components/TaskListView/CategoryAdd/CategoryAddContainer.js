import React, { Component } from 'react';
import { Container } from 'flux/utils';

import CategoryAdd from './CategoryAdd';
import CategoryStore from '../../../data/categories/CategoryStore';
import CategoryActions from '../../../data/categories/CategoryActions';

class CategoryAddContainer extends Component {
  static getStores() {
    return [CategoryStore];
  }

  static calculateState(prevState) {
    return {
      onAddCategory: CategoryActions.addCategory,
    };
  }

  render() {
    console.log(this.state);
    return <CategoryAdd onAddCategory={this.state.onAddCategory} />;
  }
}

export default Container.create(CategoryAddContainer);
