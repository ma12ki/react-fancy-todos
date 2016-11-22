import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap-4';

class SearchForm extends Component {
  render() {
    return (
      <Form inline>
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
