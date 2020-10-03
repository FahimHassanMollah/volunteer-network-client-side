import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import LogoHeader from '../logoHeader/LogoHeader';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../Firebase/firebaseconfig';
import { LoggedInUserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const LogIn = () => {
    const [user, setUser] = useContext(LoggedInUserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignInBtn = () => {
        firebase.initializeApp(firebaseConfig);
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const token = result.credential.accessToken
            // const information = result.user;
            const loggedInInformation = {
                name: result.user.displayName,
                email: result.user.email
            }
            setUser(loggedInInformation);
            history.replace(from);
        }).catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;

        });

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
                                <Button className="" style={{ fontSize: "20px" }} variant="outline-info" onClick={googleSignInBtn}><img className="px-4 mx-2" src="https://img.icons8.com/color/30/000000/google-logo.png" alt="Google" /> Continue with Google</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogIn;