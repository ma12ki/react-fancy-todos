import React, { Component } from 'react';

import './Header.css';

import SearchForm from './SearchForm';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6">
            <h2>To-Do List</h2>
        </div>
        <div className="col-xs-12 col-sm-6">
            <SearchForm className="col-xs-12 col-sm-6" />
        </div>
      </div>
    );
  }
}

export default Header;
