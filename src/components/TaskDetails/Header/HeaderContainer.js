import React, { Component } from 'react';
import { Container } from 'flux/utils';

import Header from './Header';

import TodoToEditStore from '../../../data/todoToEdit/TodoToEditStore';

class HeaderContainer extends Component {
  static getStores() {
    return [TodoToEditStore];
  }

  static calculateState() {
    return {
      selectedTodo: TodoToEditStore.getState().todo
    };
  }

  render() {
    return <Header title={this.state.selectedTodo.name} />;
  }
}

export default Container.create(HeaderContainer);
