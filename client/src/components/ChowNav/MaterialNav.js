
import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import MaterialButton from '../SelectButton/MaterialButton.js';
import './ChowNav.css';

export default class MaterialNav extends React.Component {
    render() {
        return (
            <Router>
                <Navbar color="green darken-4" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Logo Here</strong>
                    </NavbarBrand>
                        <NavbarNav left>
                          <NavItem>
                              <NavLink to="#">My Pantry</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Pending Items</NavLink>
                          </NavItem>
                          <NavItem>
                              <MaterialButton buttonColor='white' iconClass='fa fa-cutlery ml-2' buttonText='Login'>
                              </MaterialButton>
                          </NavItem>
                          <NavItem>
                              <MaterialButton buttonColor='white' iconClass='fa fa-cutlery ml-2' buttonText='Sign Up'>
                              </MaterialButton>
                          </NavItem>
                        </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}