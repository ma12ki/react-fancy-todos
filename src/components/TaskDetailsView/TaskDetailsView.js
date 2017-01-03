import React, { Component } from 'react';

import HeaderContainer from './Header/HeaderContainer';
import Content from './Content';

class TaskDetailsView extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Content />
      </div>
    );
  }
}

export default TaskDetailsView;
