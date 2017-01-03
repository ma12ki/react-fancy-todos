import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './CategoryList.css';

class CategoryList extends Component {
  constructor(props) {
    super(props);
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object
    };
  }

  handleClick(id) {
    this.props.onMoveTaskToCategory(id);
  }

  render() {
    const items = this.props.items;
    const renderedItems = items.map((item) => {
      if (item.children.length > 0) {
        return (
          <div key={item.id}>
            <ListGroupItem active={item.id === this.props.selectedCategoryId} href="#" onClick={(event) => event.preventDefault() }>
              {item.name}
              <Button onClick={() => this.handleClick(item.id) } disabled={item.id === this.props.selectedCategoryId} title="Move task to this category"><FontAwesome name='reply' /></Button>
            </ListGroupItem>
            <CategoryList items={item.children} selectedCategoryId={this.props.selectedCategoryId} onMoveTaskToCategory={this.props.onMoveTaskToCategory} />
          </div>
        );
      }

      return (<ListGroupItem active={item.id === this.props.selectedCategoryId} href="#" key={item.id} onClick={(event) => event.preventDefault() }>
          {item.name}
          <Button onClick={() => this.handleClick(item.id) } disabled={item.id === this.props.selectedCategoryId} title="Move task to this category"><FontAwesome name='reply' /></Button>
        </ListGroupItem>);
    });

    return (
      <ListGroup>
        {renderedItems}
      </ListGroup>
    );
  }
}

export default CategoryList;
