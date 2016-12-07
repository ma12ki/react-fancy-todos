import React, { Component } from 'react';
import { ListGroupItem, Checkbox, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'

class TaskItem extends Component {
  render() {
    return (
      <ListGroupItem>
        <Checkbox inline />
        Item
        <Button>
          <FontAwesome name='edit' />
        </Button>
      </ListGroupItem>
    );
  }
}

export default TaskItem;
