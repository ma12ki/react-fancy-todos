import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

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

  handleSelect(id) {
    this.props.onSelectCategory(id);
  }

  render() {
    const items = this.props.items;
    const renderedItems = items.map((item) => {
      if (item.children.length > 0) {
        return (
          <div key={item.id}>
            <ListGroupItem active={item.id === this.props.selectedCategoryId} href="#" onClick={(event) => { event.preventDefault(); this.handleSelect(item.id); }}>{item.name}</ListGroupItem>
            <CategoryList items={item.children} selectedCategoryId={this.props.selectedCategoryId} onSelectCategory={this.props.onSelectCategory} />
          </div>
        );
      }

      return <ListGroupItem active={item.id === this.props.selectedCategoryId} href="#" key={item.id} onClick={(event) => { event.preventDefault(); this.handleSelect(item.id); }}>{item.name}</ListGroupItem>;
    });

    return (
      <ListGroup>
        {renderedItems}
      </ListGroup>
    );
  }
}

export default CategoryList;
