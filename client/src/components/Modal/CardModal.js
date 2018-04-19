
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MaterialButton from '../SelectButton/MaterialButton.js';
import PantryCard from '../PantryCard/PantryCard.js';

class LModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.modalHead}</ModalHeader>
                    <ModalBody>
                       <PantryCard title='Item Name' text='Item description'></PantryCard>
                    </ModalBody>
                    <ModalFooter>
                        <MaterialButton buttonColor='success' buttonText='Something about the item'></MaterialButton>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default LModal;
