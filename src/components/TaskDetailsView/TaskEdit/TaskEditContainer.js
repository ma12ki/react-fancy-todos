import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TaskEdit from './TaskEdit';

import TodoToEditStore from '../../../data/todoToEdit/TodoToEditStore';
import TodoToEditActions from '../../../data/todoToEdit/TodoToEditActions';

class TaskEditContainer extends Component {
  static getStores() {
    return [TodoToEditStore];
  }

  static calculateState() {
    return {
      todo: TodoToEditStore.getState().todo,
      onUpdate: TodoToEditActions.updateTodo,
      onSave: TodoToEditActions.persistTodo
    };
  }

  render() {
  return <TaskEdit item={this.state.todo} onSave={this.state.onSave} onUpdate={this.state.onUpdate} />;
  }
}

export default Container.create(TaskEditContainer);
