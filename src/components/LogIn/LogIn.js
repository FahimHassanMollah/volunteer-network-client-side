import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import LogoHeader from '../logoHeader/LogoHeader';

const LogIn = () => {
    const googleSignInBtn = () => {
        
    }
    return (
        <div>
            <Container>
               <LogoHeader></LogoHeader>
            </Container>
            <Container>
                <Row className="mt-2">
                    <Col md={7} className="mx-auto">
                        <div className="p-5 ">
                             <h3 className="text-center pb-3">Login With</h3>
                           <div className="d-flex justify-content-center">
                           <Button className="" style={{fontSize:"20px"}} variant="outline-info" onClick={googleSignInBtn}><img className="px-4 mx-2" src="https://img.icons8.com/color/30/000000/google-logo.png" alt="Google" /> Continue with Google</Button>
                           </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogIn;