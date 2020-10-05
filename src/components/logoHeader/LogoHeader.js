import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import logo from '../Header/facicon.png'
const LogoHeader = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="mx-auto" md={8}>
                        <Navbar bg="" variant="">
                            <div className="mx-auto">
                                <Navbar.Brand>
                                    <img
                                        alt=""
                                        src={logo}
                                        width="200"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                            </div>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default LogoHeader;