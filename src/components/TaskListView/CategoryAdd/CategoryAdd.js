import React, { Component } from 'react';
import { Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class CategoryAdd extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAddCategory(this.categoryNameInput.value);
    this.categoryNameInput.value = '';
  }

  render() {
    return (
      <Form inline className="pull-right">
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Enter category name" inputRef={(input) => this.categoryNameInput = input} />
            <InputGroup.Button>
              <Button onClick={this.handleClick}>Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default CategoryAdd;
