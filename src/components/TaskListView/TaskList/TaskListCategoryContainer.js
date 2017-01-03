import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TaskListContainer from './TaskListContainer';
import CategoryStore from '../../../data/categories/CategoryStore';

class TaskListCategoryContainer extends Component {
  static getStores() {
    return [CategoryStore];
  }

  static calculateState(prevState) {
    return {
      selectedCategoryId: CategoryStore.getState().selectedCategoryId
    };
  }

  render() {
    return <TaskListContainer categoryId={this.state.selectedCategoryId} />;
  }
}

export default Container.create(TaskListCategoryContainer);
