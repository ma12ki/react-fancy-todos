import React, { Component } from 'react';
import { Container } from 'flux/utils';

import SearchForm from './SearchForm';
import TodoSearchStore from '../../../data/todoSearch/TodoSearchStore';
import TodoSearchActions from '../../../data/todoSearch/TodoSearchActions';

class SearchFormContainer extends Component {
  static getStores() {
    return [TodoSearchStore];
  }

  static calculateState(prevState) {
    const { showDone, searchString } = TodoSearchStore.getState().searchParams;

    return {
      showDone,
      searchString,
      onSearchByName: TodoSearchActions.searchByName,
      onSearchByDone: TodoSearchActions.searchByDone
    };
  }

  render() {
    return (
      <SearchForm showDone={this.state.showDone} searchString={this.state.searchString} onSearchByName={this.state.onSearchByName} onSearchByDone={this.state.onSearchByDone} />
    );
  }
}

export default Container.create(SearchFormContainer);
