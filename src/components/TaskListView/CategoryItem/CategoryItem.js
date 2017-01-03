import React, { PureComponent } from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class CategoryItem extends PureComponent {
  handleSelect() {
    this.props.onSelect(this.props.item.id);
  }

  handleToggleExpand() {
    this.props.onToggleExpand(this.props.item.id);
  }

  handleEdit() {
    this.props.onEdit(this.props.item);
  }

  handleDelete() {
    this.props.onDelete(this.props.item.id);
  }

  handleAddSubcategory() {
    this.props.onAddSubcategory(this.props.item.id);
  }

  render() {
    const { item, active, children } = this.props;
    const hasSubcategories = item.children.length > 0;
    let expandButton;
    if (hasSubcategories) {
      const arrow = item.collapsed ? <FontAwesome name="angle-right" /> : <FontAwesome name="angle-down" />;
      expandButton = <Button onClick={(event) => { event.preventDefault(); event.stopPropagation(); this.handleToggleExpand(); }}>{arrow}</Button>;
    }

    return (
      <ListGroupItem
        href="#"
        active={active}
        onClick={(event) => { event.preventDefault(); this.handleSelect(); }}>
        {expandButton}
        {children}
        <Button onClick={(event) => { event.preventDefault(); event.stopPropagation(); this.handleEdit(); }}><FontAwesome name="edit" /></Button>
        <Button onClick={(event) => { event.preventDefault(); event.stopPropagation(); this.handleDelete(); }}><FontAwesome name="trash" /></Button>
        <Button onClick={(event) => { event.preventDefault(); event.stopPropagation(); this.handleAddSubcategory(); }}><FontAwesome name="plus" /></Button>
      </ListGroupItem>
    );
  }
}

export default CategoryItem;
