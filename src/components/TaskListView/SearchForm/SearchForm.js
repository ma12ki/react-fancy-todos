import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleSearchByDoneChange = this.handleSearchByDoneChange.bind(this);
    this.handleSearchByNameChange = this.handleSearchByNameChange.bind(this);
  }

  static get propTypes() {
    return {
      showDone: React.PropTypes.bool.isRequired,
      searchString: React.PropTypes.string.isRequired,
      onSearchByName: React.PropTypes.func.isRequired,
      onSearchByDone: React.PropTypes.func.isRequired
    };
  }

  handleSearchByDoneChange() {
    this.props.onSearchByDone(this.showDoneInput.checked);
  }

  handleSearchByNameChange() {
    this.props.onSearchByName(this.searchStringInput.value);
  }

  render() {
    const { showDone, searchString } = this.props;

    return (
      <Form inline className="pull-right">
        <FormGroup>
          <Checkbox
            inline
            inputRef={(input) => this.showDoneInput = input}
            checked={showDone}
            onChange={this.handleSearchByDoneChange}>
              Show done
          </Checkbox>
          {' '}
          <FormControl
            inputRef={(input) => this.searchStringInput = input}
            type="text"
            placeholder="Search"
            value={searchString}
            onChange={this.handleSearchByNameChange} />
        </FormGroup>
      </Form>
    );
  }
}

export default SearchForm;
