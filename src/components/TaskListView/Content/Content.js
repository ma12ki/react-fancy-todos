import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CategoryAddContainer from '../CategoryAdd';
import CategoryListContainer from '../CategoryList';
import CategoryModalContainer from '../CategoryModal';
import TaskAddContainer from '../TaskAdd';
import TaskListContainer from '../TaskList';

class Content extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={4}>
          <Row>
            <Col xs={12}>
              <CategoryAddContainer />
            </Col>
            <Col xs={12}>
              <CategoryListContainer />
              <CategoryModalContainer />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={8}>
          <Row>
            <Col xs={12}>
              <TaskAddContainer />
            </Col>
            <Col xs={12}>
              <TaskListContainer />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Content;
