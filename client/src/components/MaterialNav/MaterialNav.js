
import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'mdbreact';
import BootstrapModal from '../BootstrapModal'
import Form from '../Form/Form.js';
import { Link } from "react-router-dom";
import MaterialButton from '../SelectButton/MaterialButton.js';
import './MaterialNav.css';


export default class MaterialNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: true
        };
       }
  
    //  toggleModal() {
    //     this.setState(state => ({
    //       visible: !state.visible
    //     }));
    //  }

     modalBackdropClicked(){
        this.setState({
            visible: false
          });
     }

    render() {
        return (
            <div>
                <Navbar color="special-color-dark" dark expand="md" scrolling>
                    <NavbarBrand>
                    <NavLink to="/"><img src="./logoChowPalNew.png" height="50"/></NavLink>
                    </NavbarBrand>
                        <NavbarNav left>
                          <NavItem>
                              <NavLink to="/">My Pantry</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/items">Pending Items</NavLink>
                          </NavItem>
                          <NavItem>
                                <MaterialButton buttonColor='white' iconClass='fa fa-cutlery ml-2' buttonText='Login'></MaterialButton>
                          </NavItem>
                          <NavItem>
                              <MaterialButton /*onClick={this.toggleModal()*/  buttonColor='white' iconClass='fa fa-cutlery ml-2' buttonText='Upload a Receipt'> */}
                              </MaterialButton>
                          </NavItem>
                        </NavbarNav>
                </Navbar>

                
                <BootstrapModal visible={this.state.visible}   />
                {/* <NavModal modal={this.state.modal} toggle={this.state.toggle} buttonLabel='Modal' modalHead='Receipt Upload' modalBody='Choose a file to upload by clicking the button below' /> */}
            </div>
        );
    }
}
