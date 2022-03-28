import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavbarBrand, NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';

interface Props {
  question
  onQuestionUpdated: (question) => void;
}

const updateQuestion = (props: Props, question) => (value: any) => {
  // keyof Color ensures only 'red', 'blue' or 'green' can be passed in.
  props.onQuestionUpdated(
    question // ... which gets one of its properties (colorId) immediately replaced by a new value.
  );
};

export const NavMenu: React.FC<Props> = (props) => {
    return (<div style={{ marginBottom:"70px"}}>
        <Navbar
          color="dark"
          dark
          expand="md"
          fixed="top"
          light
        >
          <NavbarBrand href="/">
            Physics
          </NavbarBrand>
          <NavbarToggler onClick={function counter(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="../" style={{color:"cyan"}}>
                  Question Solver
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                  style={{color:"cyan"}}>
                  Question Switcher
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem divider />
                  <DropdownItem onClick={updateQuestion(props,"Question1")}>
                  Horizental Pulley
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={updateQuestion(props,"Question2")}>
                  Atwood's Machine
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/about-us/" style={{color:"yellow"}}>
                  About us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/parsa-j42/" style={{color:"orange"}}>
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              Physics's fun, Isn't it?
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>);
};