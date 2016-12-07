import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import MainTitle from '../../common/MainTitle';
import SearchForm from './SearchForm';

class Header extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={6}>
          <MainTitle>To-Do List</MainTitle>
        </Col>
        <Col xs={12} sm={6} className="Header-align-right">
          <SearchForm />
        </Col>
      </Row>
    );
  }
}

export default Header;
