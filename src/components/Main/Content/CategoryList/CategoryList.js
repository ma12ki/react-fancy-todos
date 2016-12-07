import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CategoryList extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#" active>Link 1</ListGroupItem>
        <ListGroupItem href="#">Link 2</ListGroupItem>
        <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
        <ListGroupItem>Link 4</ListGroupItem>
        <ListGroup>
          <ListGroupItem href="#" active>Link 1</ListGroupItem>
          <ListGroupItem href="#">Link 2</ListGroupItem>
          <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
        </ListGroup>
      </ListGroup>
    );
  }
}

export default CategoryList;
