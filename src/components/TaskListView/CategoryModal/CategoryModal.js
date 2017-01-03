import React, { PureComponent } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';

class CategoryModal extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSave() {
    this.props.onSave({
      ...this.props.category,
      name: this.nameInput.value
    });
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    const { open, category } = this.props;
    const editMode = category.id;
    const heading = editMode ? 'Edit category' : 'Add new category';
    const saveButtonText = editMode ? 'Save' : 'Create';

    return (
      <Modal show={open} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            placeholder="Category title"
            inputRef={(input) => this.nameInput = input}
            defaultValue={category.name} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSave}>{saveButtonText}</Button>
          <Button onClick={this.handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CategoryModal;
