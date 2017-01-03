import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  static get propTypes() {
    return {
      showDone: React.PropTypes.bool.isRequired,
      searchString: React.PropTypes.string.isRequired,
      onChanges: React.PropTypes.func.isRequired
    };
  }

  handleChange() {
    this.props.onChanges({
      showDone: this._getInputValue(this.showDoneInput),
      searchString: this._getInputValue(this.searchStringInput)
    });
  }

  _getInputValue(input) {
    switch (input.type) {
      case 'text':
        return input.value;
      case 'checkbox':
        return input.checked;
      default:
        throw new Error(`Unsupported input type: ${input.type}`);
    }
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
            onChange={this.handleChange}>
              Show done
          </Checkbox>
          {' '}
          <FormControl
            inputRef={(input) => this.searchStringInput = input}
            type="text"
            placeholder="Search"
            value={searchString}
            onChange={this.handleChange} />
        </FormGroup>
      </Form>
    );
  }
}

export default SearchForm;
