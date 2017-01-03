import React, { Component } from 'react';
import { Container } from 'flux/utils';

import ProgressIndicator from './ProgressIndicator';
import TodoStore from '../../../data/todos/TodoStore';
import TodoActions from '../../../data/todos/TodoActions';

class ProgressIndicatorContainer extends Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    return {
      progress: ProgressIndicatorContainer.calculateProgress()
    };
  }

  static calculateProgress() {
    const todos = TodoStore.getState().todos;
    const totalTodos = todos.length;

    if (totalTodos === 0) {
      return 0;
    }

    const progress = todos.filter((todo) => {
      return todo.completed;
    }).length / totalTodos;

    return Math.trunc(progress * 100 * 100) / 100;
  }

  render() {
    return <ProgressIndicator progress={this.state.progress} />;
  }
}

export default Container.create(ProgressIndicatorContainer);
