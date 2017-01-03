import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { items, omittedItemsCount } = this.props;
    const renderedItems = items.map((item) => {
      return (<TaskItem key={item.id} item={item} onSetCompleted={this.props.onSetCompleted} />)
    });

    const omittedItemsInfo = omittedItemsCount ? <span>{omittedItemsCount} items omitted due to search criteria</span> : null;

    return (
      <div>
        <ListGroup>
          {renderedItems}
        </ListGroup>
        {omittedItemsInfo}
      </div>
    );
  }
}

export default TaskList;
