import React, { PureComponent } from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class CategoryItem extends PureComponent {
  handleSelect(id) {
    this.props.onSelect(id);
  }

  handleToggleExpand(id) {
    this.props.onToggleExpand(id);
  }

  handleEdit(id) {
    this.props.onEdit(id);
  }

  handleDelete(id) {
    this.props.onDelete(id);
  }

  handleAddSubcategory(id) {
    this.props.onAddSubcategory(id);
  }

  render() {
    const { id, active, collapsed, hasSubcategories, children } = this.props;
    let expandButton;
    if (hasSubcategories) {
      const arrow = collapsed ? <FontAwesome name="angle-right" /> : <FontAwesome name="angle-down" />;
      expandButton = <Button onClick={(event) => { event.preventDefault(); event.stopPropagation(); this.handleToggleExpand(id); }}>{arrow}</Button>;
    }

    return (
      <ListGroupItem
        href="#"
        active={active}
        onClick={(event) => { event.preventDefault(); this.handleSelect(id); }}>
        {expandButton}
        {children}
        <Button><FontAwesome name="edit" /></Button>
        <Button onClick={(event) => { event.preventDefault(); event.stopPropagation(); this.handleDelete(id); }}><FontAwesome name="trash" /></Button>
        <Button><FontAwesome name="plus" /></Button>
      </ListGroupItem>
    );
  }
}

export default CategoryItem;
