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
          collapsed={item.collapsed}
          hasSubcategories={hasSubcategories}
          onSelect={this.props.onSelect}
          onDelete={this.props.onDelete}
          onToggleExpand={this.props.onToggleExpand}>
          {item.name}
        </CategoryItem>
      );

      const subcategoryList = hasSubcategories ? (
        <CategoryList
          className={item.collapsed ? 'collapsed' : ''}
          items={item.children}
          selectedCategoryId={this.props.selectedCategoryId}
          onSelect={this.props.onSelect}
          onDelete={this.props.onDelete}
          onToggleExpand={this.props.onToggleExpand} />) : null;

      return (
        <div key={item.id}>
          {categoryItem}
          {subcategoryList}
        </div>
      );
    });

    return (
      <ListGroup className={this.props.className}>
        {renderedItems}
      </ListGroup>
    );
  }
}

export default CategoryList;
