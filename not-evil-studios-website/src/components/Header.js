import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import './Header.css'


export default function Header() {
    return (
      
        <Navbar className='navbar'>
            <Navbar.Brand as={Link} to="/">
                <img className="image-navbar"
                  src={logo}
                  alt = "Not evil studios logo"
                />
            </Navbar.Brand>
            
            <Nav  style={{
                fontSize: "30px", 
                padding: '10px', 
                marginRight:'20px',
                color:'white'
                
                }}>
                <Nav.Item>
                <Nav.Link as={Link} to="/" style={{ color:'white'}}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} to="/projects" style={{ color:'white'}}>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} to="/about-us"style={{ color:'white'}}>About us</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
      
    );
}