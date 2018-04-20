
import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'mdbreact';
import Modal from '../Modal/Modal.js';
import Form from '../Form/Form.js';
import { Link } from 'react-router-dom';
import MaterialButton from '../SelectButton/MaterialButton.js';
import './MaterialNav.css';


export default class MaterialNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  toggleModal() {
    this.setState(state => ({
      visible: !state.visible,
    }));
  }

  modalBackdropClicked() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Navbar color='special-color-dark' dark expand='md' scrolling>
          <NavbarBrand>
            <NavLink to='/'><img src='/logoChowPalNew.png' alt='ChowPal Logo' height='50' /></NavLink>
          </NavbarBrand>
          <NavbarNav left>
            <NavItem>
              <Modal buttonLabel='Modal Here' modalHead='Receipt Upload Window' modalBody='Choose a file to upload by clicking on the "Choose File" button below!' />
            </NavItem>
            <NavItem>
              <MaterialButton buttonColor='white' iconClass='fa fa-id-card ml-2' buttonText='Login' />
            </NavItem>
            <NavItem>
              <NavLink to='/'>My Pantry</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/items'>Pending Items</NavLink>
            </NavItem>
          </NavbarNav>
        </Navbar>


        {/* <BootstrapModal visible={this.state.visible}   /> */}
        {/* <NavModal modal={this.state.modal} toggle={this.state.toggle} buttonLabel='Modal' modalHead='Receipt Upload' modalBody='Choose a file to upload by clicking the button below' /> */}
      </div>
    );
  }
}
