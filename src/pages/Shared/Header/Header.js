import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../resources/logos/Group 1329.png'
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
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
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/donation">Donation</Nav.Link>
                            <Nav.Link as={HashLink} to="/addEvents">Events</Nav.Link>
                            <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        {
                            user.email ? <div className='d-flex'>
                                <h5 style={{ fontSize: "15px", width: '100px', marginTop: '7px' }}>{user.displayName}</h5>
                                <button onClick={logout} className='btn-md  btn-admin ms-2' >Logout</button>
                            </div> : <div className='d-flex align-items-center justify-content-center '>
                                <Link to='/register'>
                                    <button className='btn-md  btn-reg ms-3' >Register</button>
                                </Link>
                                <Link to='/admin'>
                                    <button className='btn-md  btn-admin ms-2' >Admin</button>
                                </Link>
                            </div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;