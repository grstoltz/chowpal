import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
                    <ModalHeader toggle={this.toggle}>Example Modal</ModalHeader>
                    <ModalBody>
                       Alan is v handsome
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Handsome Al</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Handsome Davo</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default LModal;