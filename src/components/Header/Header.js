import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from './facicon.png';
import { Link } from 'react-router-dom';
import { LoggedInUserContext } from '../../App';
const Header = () => {
    const [user, setUser] = useContext(LoggedInUserContext);
    return (
        <div>
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ width: '200px' }} src={logo} alt="" />
                    </Navbar.Brand>
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
                            user.email ? '' : <Button className="px-4 mx-2 link" variant="dark">Admin</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;