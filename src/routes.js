import React from 'react';
import { Router, Route } from 'react-router';

import Main from './components/Main';
import TaskDetails from './components/TaskDetails';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Main} />
    <Route path="/task/:id" component={TaskDetails} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
