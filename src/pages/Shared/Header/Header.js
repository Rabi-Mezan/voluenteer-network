import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../resources/logos/Group 1329.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container className='d-flex justify-content-between'>
                    <Navbar.Brand href="#home">
                        <img className='w-25' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fw-normal">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Donation</Nav.Link>
                            <Nav.Link href="#link">Events</Nav.Link>
                            <Nav.Link href="#link">Blogs</Nav.Link>
                        </Nav>
                        <button className='btn-md  btn-reg ms-3' >Register</button>
                        <button className='btn-md  btn-admin ms-2' >Admin</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;