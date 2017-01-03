import React, { PureComponent } from 'react';
import { ListGroup } from 'react-bootstrap';

import CategoryItem from '../CategoryItem';

import './CategoryList.css';

class CategoryList extends PureComponent {
  render() {
    const items = this.props.items;
    const renderedItems = items.map((item) => {
      const hasSubcategories = item.children.length > 0;
      const categoryItem = (
        <CategoryItem
          id={item.id}
          active={item.id === this.props.selectedCategoryId}
          hasSubcategories={hasSubcategories}
          onSelect={this.props.onSelect}
          onDelete={this.props.onDelete}>
          {item.name}
        </CategoryItem>
      );

      const subcategoryList = hasSubcategories ? <CategoryList items={item.children} selectedCategoryId={this.props.selectedCategoryId} onSelect={this.props.onSelect} onDelete={this.props.onDelete} /> : null;

      return (
        <div key={item.id}>
          {categoryItem}
          {subcategoryList}
        </div>
      );
    });

    return (
      <ListGroup>
        {renderedItems}
      </ListGroup>
    );
  }
}

export default CategoryList;
