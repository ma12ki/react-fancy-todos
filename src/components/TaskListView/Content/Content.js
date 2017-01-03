import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CategoryAdd from '../CategoryAdd';
import CategoryListContainer from '../CategoryList';
import TaskAddContainer from '../TaskAdd';
import TaskList from '../TaskList';

// const categories = [
//   {name: 'Category 1', id: 1},
//   {name: 'Category 2', id: 2},
//   {name: 'Category 3', id: 3, children: [
//     {name: 'Category 3_1', id: 4},
//     {name: 'Category 3_2', id: 5},
//     {name: 'Category 3_3', id: 6, children: [
//       {name: 'Category 3_3_1', id: 7},
//       {name: 'Category 3_3_2', id: 8}
//     ]}
//   ]}
// ];

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
