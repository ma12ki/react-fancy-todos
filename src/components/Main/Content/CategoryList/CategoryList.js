import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import './CategoryList.css';

class CategoryList extends Component {
  render() {
    const items = this.props.items;
    const renderedItems = items.map((item) => {
      if (item.children) {
        return (
          <div>
            <ListGroupItem href="#">{item.name}</ListGroupItem>
            <CategoryList items={item.children} />
          </div>
        );
      }

      return <ListGroupItem href="#">{item.name}</ListGroupItem>;
    });

    return (
      <ListGroup>
        {renderedItems}
      </ListGroup>
    );
  }
}

export default CategoryList;
