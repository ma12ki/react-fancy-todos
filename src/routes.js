import React from 'react';
import { Router, Route } from 'react-router';

import TodoToEditActions from './data/todoToEdit/TodoToEditActions';

import Main from './components/Main';
import TaskDetails from './components/TaskDetails';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Main} />
    <Route path="/task/:id" component={TaskDetails} onEnter={handleTaskDetailsEnter} />
    <Route path="*" component={NotFound} />
  </Router>
);

function handleTaskDetailsEnter(nextState) {
  const { id } = nextState.params;

  TodoToEditActions.setTodo(id);
}

export default Routes;
