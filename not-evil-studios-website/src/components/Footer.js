import React from 'react'
import './Footer.css'
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (
    <Container
    fluid
    className='footer-container'
    >
        <Row>
          <Col xl={6} xs={6} style={{textAlign:'center', color:'white'}}>
            Copyright NOT EVIL STUDIOS
          </Col>
          <Col xl={6} xs={6}  style={{textAlign:'center', color:'white'}}>
            Social media links
          </Col>
        </Row>
    </Container>
  )
}

export default Footer