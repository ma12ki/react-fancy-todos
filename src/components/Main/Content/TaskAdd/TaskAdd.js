import React, { PureComponent } from 'react';
import { Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class TaskAdd extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAddTodo(this.todoNameInput.value);
    this.todoNameInput.value = '';
  }

  render() {
    return (
      <Form inline className="pull-right">
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Enter task name" inputRef={(input) => this.todoNameInput = input} />
            <InputGroup.Button>
              <Button onClick={this.handleClick}>Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default TaskAdd;
