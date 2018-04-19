import React from 'react';
import Modal from 'react-bootstrap4-modal';

export default class BootstrapModal extends React.Component {
  // event handling methods go here

  render() {
    return (
      <Modal visible={this.props.visible} onClickBackdrop={this.props.onClickBackdrop}>
        <div className="modal-header">
          <h5 className="modal-title">Red Alert!</h5>
        </div>
        <div className="modal-body">
          <p>Enemy vessel approaching!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.onPanic}>
            Panic
          </button>
          <button type="button" className="btn btn-primary" onClick={this.onFirePhasers}>
            Fire phasers
          </button>
        </div>
      </Modal>
    );
  }
}