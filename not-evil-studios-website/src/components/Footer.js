import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (
    <Container
      fluid
      style={{
        position: 'absolute',
        bottom: 0,
        paddingBottom: '20px',
        backgroundColor: 'gray'
      }}>
        <Row>
          <Col xl={6} xs={6} style={{textAlign:"center"}}>
            Copyright NOT EVIL STUDIOS
          </Col>
          <Col xl={6} xs={6}  style={{textAlign:"center"}}>
            Social media links
          </Col>
        </Row>
    </Container>
  )
}

export default Footer