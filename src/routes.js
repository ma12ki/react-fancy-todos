import React from 'react';
import { Router, Route } from 'react-router';

import TodoToEditActions from './data/todoToEdit/TodoToEditActions';

import TaskListView from './components/TaskListView';
import TaskDetailsView from './components/TaskDetailsView';
import NotFoundView from './components/NotFoundView';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={TaskListView} />
    <Route path="/task/:id" component={TaskDetailsView} onEnter={handleTaskDetailsEnter} />
    <Route path="*" component={NotFoundView} />
  </Router>
);

function handleTaskDetailsEnter(nextState) {
  const { id } = nextState.params;

  TodoToEditActions.setTodo(id);
}

export default Routes;
