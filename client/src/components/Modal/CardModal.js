
import React from 'react';
/* eslint max-len: 0, react/prefer-stateless-function: 0 */
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MaterialButton from '../SelectButton/MaterialButton';
import ModalCard from '../ModalCard/ModalCard';

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <MaterialButton buttonColor='white' buttonText='Hello' onClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.modalHead}</ModalHeader>
          <ModalBody>
            <ModalCard title='Item Name' text='Item description' />
          </ModalBody>
          <ModalFooter>
            <MaterialButton buttonColor='success' buttonText='Something about the item' />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CardModal;
