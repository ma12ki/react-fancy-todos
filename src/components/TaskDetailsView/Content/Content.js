import React, { Component } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

import CategoryListContainer from '../CategoryList';
import TaskEditContainer from '../TaskEdit';

class Content extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={4}>
          <Row>
            <Col xs={12}>
              <CategoryListContainer />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={8}>
          <TaskEditContainer />
        </Col>
      </Row>
    );
  }
}

export default Content;
