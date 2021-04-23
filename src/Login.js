import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'

export const Login = () => {
    return (  
        <div className="container">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                    3 of 3
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                    3 of 3
                    </Col>
                </Row>
            </Container>
        </div>
    )
}