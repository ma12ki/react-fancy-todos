import React, { Component } from 'react';

import HeaderContainer from './Header/HeaderContainer';
import Content from './Content';

class TaskDetails extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Content />
      </div>
    );
  }
}

export default TaskDetails;
