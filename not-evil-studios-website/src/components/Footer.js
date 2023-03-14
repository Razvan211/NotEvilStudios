import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (
    <Container
      fluid
      style={{
        marginTop:'auto',
        bottom:0,
        paddingBottom: '70px',
        backgroundColor: 'rgba(180, 0, 0, 0.8)',
       
      }}>
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