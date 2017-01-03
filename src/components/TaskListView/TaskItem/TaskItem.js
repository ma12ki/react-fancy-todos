import React, { Component } from 'react';
import { Link } from 'react-router';
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
    const { id, name, completed } = this.props.item;

    return (
      <ListGroupItem>
        <Checkbox inline onChange={this.handleChange} checked={completed} />
          {name}
        <Button>
          <Link to={`/task/${id}`}><FontAwesome name='edit' /></Link>
        </Button>
      </ListGroupItem>
    );
  }
}

export default TaskItem;
