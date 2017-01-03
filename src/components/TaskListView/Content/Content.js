import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CategoryAddContainer from '../CategoryAdd';
import CategoryListContainer from '../CategoryList';
import TaskAddContainer from '../TaskAdd';
import TaskList from '../TaskList';

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
              <CategoryListContainer lol={'mao'} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={8}>
          <Row>
            <Col xs={12}>
              <TaskAddContainer />
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
