import React from 'react'
import './Footer.css'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Container fluid className='footer-container'>
      <Row xs={6} md={6} style={{ color: 'white' }}>
        <Col className='first-column'>
          Copyright NOT EVIL STUDIOS
        </Col>
        </Row>
      <Row xs={6} md={6}  style={{ color: 'white'  }}>
        <Col className='socials-column fa-lg'>
        <a href='https://twitter.com/NotEvilStudios' rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faTwitter} /> </a>       
        <a href='https://www.facebook.com/profile.php?id=100089749505346' rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faFacebook} /> </a>       
        <a href='https://twitter.com/NotEvilStudios' rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faYoutube} /> </a>     
        <a href='https://www.linkedin.com/company/93093211' rel='noreferrer' target="_blank" >
        <FontAwesomeIcon icon={faLinkedin} /> </a>         
         </Col>
      </Row>
    </Container>
  )
}

export default Footer