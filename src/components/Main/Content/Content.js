import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CategoryAdd from './CategoryAdd';
import CategoryList from './CategoryList';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';

class Content extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={4}>
          <Row>
            <Col xs={12}>
              <CategoryAdd />
            </Col>
            <Col xs={12}>
              <CategoryList />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={8}>
          <Row>
            <Col xs={12}>
              <TaskAdd />
            </Col>
            <Col xs={12}>
              <TaskList />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Content;
