import React, { Component } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

import CategoryList from '../CategoryList';

const categories = [
  {name: 'Category 1', id: 1},
  {name: 'Category 2', id: 2},
  {name: 'Category 3', id: 3, children: [
    {name: 'Category 3_1', id: 4},
    {name: 'Category 3_2', id: 5},
    {name: 'Category 3_3', id: 6, children: [
      {name: 'Category 3_3_1', id: 7},
      {name: 'Category 3_3_2', id: 8}
    ]}
  ]}
];

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
              <CategoryList items={categories} />
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
