import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TaskList from './TaskList';
import TodoStore from '../../../data/todos/TodoStore';
import TodoActions from '../../../data/todos/TodoActions';
import TodoSearchStore from '../../../data/todoSearch/TodoSearchStore';

class TaskListContainer extends Component {
  static getStores() {
    return [TodoStore, TodoSearchStore];
  }

  static calculateState(prevState, props) {
    return {
      items: TaskListContainer.getFilteredItems(props.categoryId),
      onSetCompleted: TodoActions.setCompleted
    };
  }

  static getFilteredItems(categoryId) {
    const items = TodoStore.getByCategoryId(categoryId);
    const { showDone, searchString } = TodoSearchStore.getState().searchParams;

    return items.filter((item) => {
      return (showDone ? true : !item.completed) && (searchString ? item.name.match(new RegExp(searchString, 'i')) : true);
    });
  }

  render() {
    return <TaskList items={this.state.items} onSetCompleted={this.state.onSetCompleted} />;
  }
}

export default Container.create(TaskListContainer, {withProps: true});
