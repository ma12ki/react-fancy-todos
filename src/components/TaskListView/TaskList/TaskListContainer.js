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
    const { items, omittedItemsCount } = TaskListContainer.getFilteredItems(props.categoryId);

    return {
      items,
      omittedItemsCount,
      onSetCompleted: TodoActions.setCompleted
    };
  }

  static getFilteredItems(categoryId) {
    const items = TodoStore.getByCategoryId(categoryId);
    const { showDone, searchString } = TodoSearchStore.getState().searchParams;
    const filteredItems = items.filter((item) => {
      return (showDone ? true : !item.completed) && (searchString ? item.name.match(new RegExp(searchString, 'i')) : true);
    });

    return {
      items: filteredItems,
      omittedItemsCount: items.length - filteredItems.length
    };
  }

  render() {
    return <TaskList items={this.state.items} omittedItemsCount={this.state.omittedItemsCount} onSetCompleted={this.state.onSetCompleted} />;
  }
}

export default Container.create(TaskListContainer, {withProps: true});
