import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';



export default function Header() {
    return (
      
        <Navbar
        style={{
            backgroundColor:'rgba(180, 0, 0, 0.8)',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
            
        }}>
            <Navbar.Brand as={Link} to="/">
                <img
                  src={logo}
                  width="150"
                  height="150"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
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