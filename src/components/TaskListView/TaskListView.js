import React, { Component } from 'react';

import Header from './Header';
import ProgressIndicator from './ProgressIndicator';
import Content from './Content';

class TaskListView extends Component {
  render() {

    return (
      <div>
        <Header />
        <ProgressIndicator />
        <Content />
      </div>
    );
  }
}

export default TaskListView;
