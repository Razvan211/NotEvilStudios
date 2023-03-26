import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import './Header.css'


export default function Header() {

    const [expanded, setExpanded] = useState(false);
    return (
      
          <Navbar className='navbar' expand='md' expanded={expanded}>
            <Navbar.Brand as={Link} to='/'>
              <img
                className='image-navbar'
                src={logo}
                alt='Not evil studios logo'
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls='basic-navbar-nav'
              style={{backgroundColor: 'white'}}
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'
               style={{
                       fontSize: "30px", 
                       padding: '10px', 
                       color:'white'
                         }}>
                <Nav.Link as={Link} to='/' style={{ color:'white'}} onClick={() => setExpanded(false)}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to='/projects' style={{ color:'white'}} onClick={() => setExpanded(false)}>
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to='/about-us' style={{ color:'white'}} onClick={() => setExpanded(false)}>
                  About us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
      }
       
      
