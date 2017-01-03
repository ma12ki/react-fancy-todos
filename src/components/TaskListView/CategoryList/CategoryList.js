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
          item={item}
          active={item.id === this.props.selectedCategoryId}
          onSelect={this.props.onSelect}
          onDelete={this.props.onDelete}
          onToggleExpand={this.props.onToggleExpand}
          onAddSubcategory={this.props.onAddSubcategory}
          onEdit={this.props.onEdit}>
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
          onToggleExpand={this.props.onToggleExpand}
          onAddSubcategory={this.props.onAddSubcategory}
          onEdit={this.props.onEdit} />) : null;

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
