import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoggedInUserContext } from '../../App';
import Header from '../Header/Header';
import NoEvents from '../NoEvents/NoEvents';
import UserEventsDetails from '../UserEventsDetails/UserEventsDetails';

const Event = () => {
    const [user, setUser] = useContext(LoggedInUserContext);
    const [userEventsInformation, setUserEventsInformation] = useState([]);
    const [reloeadPageAfterDeleteEvent, setReloeadPageAfterDeleteEvent] = useState(0);
    const [allCategories, setAllCategories] = useState([])
    const deleteEvent = (id) => {
      
        fetch('http://localhost:8080/deleteEvent/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },

        })
            .then(res => res.json())
            .then(res => {
                setReloeadPageAfterDeleteEvent(reloeadPageAfterDeleteEvent + 1);

            })
    }

    useEffect(() => {
        fetch('http://localhost:8080/volunterEventsInformationByEmail/' + user.email)
            .then(res => res.json())
            .then(data => {
                setUserEventsInformation(data);
            })


    }, [user.email, reloeadPageAfterDeleteEvent])
    useEffect(() => {

        fetch('http://localhost:8080/getVolunteerCategories')
            .then(res => res.json())
            .then(res => {
                setAllCategories(res)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className="d-flex justify-content-center pt-5">



                    {
                       ( allCategories.length > 0 && userEventsInformation.length > 0 )? userEventsInformation.map((event, index) => <UserEventsDetails allCategories={allCategories} key={index} deleteEvent={deleteEvent} userEvents={event}></UserEventsDetails>)
                       :
                       <NoEvents></NoEvents>
                    }



                </Row>
            </Container>

        </div>
    );
};

export default Event;