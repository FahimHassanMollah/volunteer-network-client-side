import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoggedInUserContext } from '../../App';
import Header from '../Header/Header';
import UserEventsDetails from '../UserEventsDetails/UserEventsDetails';

const Event = () => {
    const [user, setUser] = useContext(LoggedInUserContext);
    const [userEventsInformation, setUserEventsInformation] = useState([])
    useEffect(() => {
      fetch('http://localhost:8080/volunterEventsInformationByEmail/'+user.email)
      .then(res=>res.json())
      .then(data=>{
        setUserEventsInformation(data);
      })
    }, [user.email])
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className="d-flex justify-content-center">
                   
                      
                     
                      {
                            userEventsInformation.length>0 &&userEventsInformation.map((event)=> <UserEventsDetails userEvents={event}></UserEventsDetails>)
                        }
                     
                       
                 
                </Row>
            </Container>

        </div>
    );
};

export default Event;