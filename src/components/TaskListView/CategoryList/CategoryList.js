import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import './CategoryList.css';

class CategoryList extends Component {
  static get contextTypes() {
    return {
      router: React.PropTypes.object
    };
  }

  render() {
    const items = this.props.items;
    const renderedItems = items.map((item) => {
      if (item.children.length > 0) {
        return (
          <div key={item.id}>
            <ListGroupItem href="#">{item.name}</ListGroupItem>
            <CategoryList items={item.children} />
          </div>
        );
      }

      return <ListGroupItem href="#" key={item.id}>{item.name}</ListGroupItem>;
    });

    console.log(this.context);

    return (
      <ListGroup>
        {renderedItems}
      </ListGroup>
    );
  }
}

export default CategoryList;
