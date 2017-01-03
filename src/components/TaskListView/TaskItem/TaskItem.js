import React, { Component } from 'react';
import { ListGroupItem, Checkbox, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { id } = this.props.item;

    this.props.onSetCompleted(id, event.target.checked);
  }

  render() {
    const { name } = this.props.item;

    return (
      <ListGroupItem>
        <Checkbox inline onChange={this.handleChange}/>
          {name}
        <Button>
          <FontAwesome name='edit' />
        </Button>
      </ListGroupItem>
    );
  }
}

export default TaskItem;
