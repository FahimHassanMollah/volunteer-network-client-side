import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './facicon.png';

const AdminHeader = () => {
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
                        <Nav className="ml-auto" >
                            <Link to={`/volunteerRegisterlist`} className="px-2"> 
                            <Button   variant="outline-dark"> Volunteer register list</Button>
                           </Link>
                            <Link to={`/addEvent`} className="px-2" >
                                <Button  variant="outline-dark">Add event </Button>
                            </Link>
                           
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AdminHeader;