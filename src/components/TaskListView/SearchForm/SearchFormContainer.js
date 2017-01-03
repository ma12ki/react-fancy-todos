import React, { Component } from 'react';

import routerHelper from '../../../utils/routerHelper';
import SearchForm from './SearchForm';

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDone: true,
      searchString: ''
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(changes) {
    this._updateQueryParams(changes);
    this.setState({...changes});
  }

  _updateQueryParams(params) {
    routerHelper.mergeQueryParams(params);
  }

  render() {
    return (
      <SearchForm showDone={this.state.showDone} searchString={this.state.searchString} onChanges={this.handleChanges} />
    );
  }
}

export default SearchFormContainer;
