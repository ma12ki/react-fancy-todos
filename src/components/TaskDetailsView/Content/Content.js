import React, { Component } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

import CategoryListContainer from '../CategoryList';

const tasks = [
  {name: 'Task 1', description: 'Some task', id: 1, categoryId: 1},
  {name: 'Task 2', description: 'Some task', id: 2, categoryId: 1},
  {name: 'Task 3', description: 'Some task', id: 3, categoryId: 1},
  {name: 'Task 4', description: 'Some task', id: 4, categoryId: 1},
  {name: 'Task 5', description: 'Some task', id: 5, categoryId: 1},
  {name: 'Task 6', description: 'Some task', id: 6, categoryId: 1}
];

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
          <Row>
            <Col xs={12}>
              <Button type="button">Save</Button>
              <Button type="button">Cancel</Button>
            </Col>
            <Col xs={12}>
              <FormControl type="text" placeholder="Task name" />
              <FormControl componentClass="textarea" placeholder="Task description" />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Content;
