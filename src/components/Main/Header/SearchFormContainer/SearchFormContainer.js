import React, { Component } from 'react';
import SearchForm from '../SearchForm';

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showActive: true,
      searchString: ''
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(changes) {
      this.setState({...changes});
  }

  render() {
    return (
      <SearchForm showActive={this.state.showActive} searchString={this.state.searchString} onChanges={this.handleChanges} />
    );
  }
}

export default SearchFormContainer;
