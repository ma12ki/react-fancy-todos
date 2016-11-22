import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class SearchForm extends Component {
  render() {
    return (
      <Form inline className="pull-right">
        <FormGroup>
          <Checkbox inline> Show active </Checkbox>
          {' '}
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
      </Form>
    );
  }
}

export default SearchForm;
