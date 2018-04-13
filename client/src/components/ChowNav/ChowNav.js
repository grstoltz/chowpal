import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

export default class ChowNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
        {/* <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Chow Pal</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <NavbarNav>
              <NavItem>
                <NavLink to="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar> */}
    );
  }
}
