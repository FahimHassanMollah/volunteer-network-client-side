import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from './facicon.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { LoggedInUserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../Firebase/firebaseconfig';
const Header = () => {
    const [user, setUser] = useContext(LoggedInUserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = { from: { pathname: "/" } };
    const logOut = () => {
        firebase.auth().signOut().then(function() {
            history.replace(from)
          }).catch(function(error) {
            // An error happened.
          });
        let newuser={...user};
        newuser.name="";
        newuser.email="";
        setUser(newuser);
    }
    return (
        <div>
            <Navbar bg="" expand="lg">
                <Container>
                <Link to={'/'}>
                  <Navbar.Brand >
                        <img style={{ width: '200px' }} src={logo} alt="" />
                    </Navbar.Brand>
                  </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to={`/`} className="btn px-4  link"> Home</Link>
                            <Link to={`/donation`} className="btn px-4  link">Donation </Link>
                            <Link to={`/event`} className="btn px-4  link"> Events </Link>
                            <Link to={`/blog`} className="btn px-4  link">  Blog  </Link>
                        </Nav>
                        {
                            user.email ?
                                <Button className="px-4 mx-2  link" variant="primary">{user.name}</Button>
                                :
                                <Link to={'/login'}>
                                    <Button className="px-4 mx-2  link" variant="primary">Register</Button>
                                </Link>
                        }
                        {
                            user.email ? <Button onClick={logOut} className="px-4 mx-2 link" variant="dark">LogOut</Button> :
                            <Link to={'/volunteerRegisterlist'}>
                                <Button className="px-4 mx-2 link" variant="dark">Admin</Button>
                            </Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;