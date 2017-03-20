import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Title
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem href="#">Hey Y'all</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;