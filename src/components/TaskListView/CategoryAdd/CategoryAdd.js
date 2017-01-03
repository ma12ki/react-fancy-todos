import React, { Component } from 'react';
import { Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class CategoryAdd extends Component {
  render() {
    return (
      <Form inline className="pull-right">
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Enter category title" />
            <InputGroup.Button>
              <Button>Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default CategoryAdd;
