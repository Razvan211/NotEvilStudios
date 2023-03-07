import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';



export default function Header() {
    return (
      
        <Navbar
        style={{
            backgroundColor: "grey",
        }}>
            <Navbar.Brand as={Link} to="/">
                <img
                  src={logo}
                  width="75"
                  height="75"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            
            <Nav >
                <Nav.Item >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
      
    );
}