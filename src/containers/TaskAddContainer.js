import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TaskAdd from '../components/Main/Content/TaskAdd';
import TodoStore from '../data/todos/TodoStore';
import TodoActions from '../data/todos/TodoActions';

class TaskAddContainer extends Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    return {
      onAddTodo: TodoActions.addTodo,
    };
  }

  render() {
    return <TaskAdd onAddTodo={this.state.onAddTodo} />;
  }
}

export default Container.create(TaskAddContainer);
