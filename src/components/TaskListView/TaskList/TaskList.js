import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { items } = this.props;
    const renderedItems = items.map((item) => {
      return (<TaskItem key={item.id} item={item} onSetCompleted={this.props.onSetCompleted} />)
    });

    return (
      <ListGroup>
        {renderedItems}
      </ListGroup>
    );
  }
}

export default TaskList;
