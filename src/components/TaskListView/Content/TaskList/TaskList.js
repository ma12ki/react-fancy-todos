import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    return (
      <ListGroup>
        <TaskItem />
        <TaskItem />
      </ListGroup>
    );
  }
}

export default TaskList;
