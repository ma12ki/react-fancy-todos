import React, { PureComponent } from 'react';
import { Row, Col, Button, FormControl, Checkbox } from 'react-bootstrap';

class TaskEdit extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUpdate({
      name: this.nameInput.value,
      completed: this.doneInput.checked,
      description: this.descriptionInput.value
    });
  }

  render() {
    const { name, completed, description } = this.props.item;

    return (
      <Row>
        <Col xs={12}>
          <Button type="button" onClick={this.props.onSave}>Save</Button>
          <Button type="button">Cancel</Button>
        </Col>
        <Col xs={12}>
          <FormControl
            type="text"
            placeholder="Task name"
            value={name}
            inputRef={(input) => this.nameInput = input}
            onChange={this.handleChange} />
          <Checkbox
            inline
            inputRef={(input) => this.doneInput = input}
            checked={completed}
            onChange={this.handleChange}>
              Done
          </Checkbox>
          <FormControl
            componentClass="textarea"
            placeholder="Task description"
            value={description}
            inputRef={(input) => this.descriptionInput = input}
            onChange={this.handleChange} />
        </Col>
      </Row>
    );
  }
}

export default TaskEdit;
