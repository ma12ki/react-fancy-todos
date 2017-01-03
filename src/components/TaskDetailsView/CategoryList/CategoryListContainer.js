import React, { Component } from 'react';
import { Container } from 'flux/utils';

import CategoryList from './CategoryList';
import TodoToEditStore from '../../../data/todoToEdit/TodoToEditStore';
import TodoToEditActions from '../../../data/todoToEdit/TodoToEditActions';

class CategoryListContainer extends Component {
  static getStores() {
    return [TodoToEditStore];
  }

  static calculateState(prevState, props) {
    return {
      items: props.items,
      selectedCategoryId: TodoToEditStore.getState().todo.categoryId,
      onMoveTaskToCategory: TodoToEditActions.moveToCategory
    };
  }

  render() {
    return <CategoryList items={this.state.items} selectedCategoryId={this.state.selectedCategoryId} onMoveTaskToCategory={this.state.onMoveTaskToCategory} />;
  }
}

export default Container.create(CategoryListContainer, {withProps: true});
