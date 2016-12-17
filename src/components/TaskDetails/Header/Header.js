import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import MainTitle from '../../common/MainTitle';

class Header extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <MainTitle>Some task</MainTitle>
        </Col>
      </Row>
    );
  }
}

export default Header;
