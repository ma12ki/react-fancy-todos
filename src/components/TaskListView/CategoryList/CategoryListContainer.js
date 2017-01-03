import React, { Component } from 'react';
import { Container } from 'flux/utils';

import CategoryList from './CategoryList';
import CategoryStore from '../../../data/categories/CategoryStore';
import CategoryActions from '../../../data/categories/CategoryActions';
import CategoryModalActions from '../../../data/categoryModal/CategoryModalActions';

class CategoryListContainer extends Component {
  static getStores() {
    return [CategoryStore];
  }

  static calculateState(prevState) {
    return {
      items: getNestedCategories(),
      selectedCategoryId: CategoryStore.getState().selectedCategoryId,
      onSelect: CategoryActions.selectCategory,
      onDelete: CategoryActions.deleteCategory,
      onToggleExpand: CategoryActions.toggleExpandCategory,
      onAddSubcategory: addSubcategory,
      onEdit: editCategory
    };
  }

  render() {
    return (
      <CategoryList
        items={this.state.items}
        selectedCategoryId={this.state.selectedCategoryId}
        onSelect={this.state.onSelect}
        onDelete={this.state.onDelete}
        onToggleExpand={this.state.onToggleExpand}
        onAddSubcategory={this.state.onAddSubcategory}
        onEdit={this.state.onEdit} />
    );
  }
}

function getNestedCategories(parentId) {
  return CategoryStore.getListByParentId(parentId).map((category) => {
    return {
      ...category,
      children: getNestedCategories(category.id)
    };
  });
}

function addSubcategory(parentId) {
  CategoryModalActions.open({
    parentId
  });
}

function editCategory(category) {
  CategoryModalActions.open(category);
}

export default Container.create(CategoryListContainer);
