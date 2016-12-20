import React, { Component } from 'react';
import { Container } from 'flux/utils';

import Header from './Header';
import TodoStore from '../../../data/todos/TodoStore';

class HeaderContainer extends Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    const storeState = TodoStore.getState();
    const selectedTodo = storeState.todos.find((todo) => {
      return todo.id == storeState.selectedTodoId;
    });

    return {
      selectedTodo: selectedTodo
    };
  }

  render() {
    return <Header title={this.state.selectedTodo.name} />;
  }
}

export default Container.create(HeaderContainer);
