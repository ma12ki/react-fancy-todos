import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TaskList from './TaskList';
import TodoStore from '../../../data/todos/TodoStore';
import TodoActions from '../../../data/todos/TodoActions';

class TaskListContainer extends Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState, props) {
    return {
      items: TodoStore.getByCategoryId(props.categoryId),
      onSetCompleted: TodoActions.setCompleted
    };
  }

  render() {
    return <TaskList items={this.state.items} onSetCompleted={this.state.onSetCompleted} />;
  }
}

export default Container.create(TaskListContainer, {withProps: true});
