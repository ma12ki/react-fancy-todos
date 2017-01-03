import React, { Component } from 'react';
import { Container } from 'flux/utils';

import CategoryModal from './CategoryModal';
import CategoryModalStore from '../../../data/categoryModal/CategoryModalStore';
import CategoryModalActions from '../../../data/categoryModal/CategoryModalActions';

class CategoryModalContainer extends Component {
  static getStores() {
    return [CategoryModalStore];
  }

  static calculateState(prevState) {
    const state = CategoryModalStore.getState();

    return {
      open: state.open,
      category: state.category,
      onSave: CategoryModalActions.saveCategory,
      onClose: CategoryModalActions.close
    };
  }

  render() {
    return (
      <CategoryModal
        open={this.state.open}
        category={this.state.category}
        onSave={this.state.onSave}
        onClose={this.state.onClose} />
    );
  }
}

export default Container.create(CategoryModalContainer);
