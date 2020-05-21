import React  from "react";

import { Nav, NavDropdown, Button } from "react-bootstrap";

import { StyledNav } from "./styles";

const Navbar = () => {
    const Login = (
        <div>
            <Button onClick={() => console.log('clicked loggin')}>Login</Button>
        </div>
    );

    return (
        <StyledNav sticky="top">
            <StyledNav.Brand href="/">
                <img alt="company logo" src="vercel.svg" width="30" height="30" className="d-inline-block align-top" />
            </StyledNav.Brand>
            <StyledNav.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Profile</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {Login}
            </StyledNav.Collapse>
        </StyledNav>
    );
};

export default Navbar;
