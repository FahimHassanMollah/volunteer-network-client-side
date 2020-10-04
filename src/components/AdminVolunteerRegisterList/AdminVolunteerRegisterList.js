import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';
import TableRow from '../TableRow/TableRow';

const AdminVolunteerRegisterList = () => {
    const [userInformations, setUserInformations] = useState([]);
    const [reloeadPageAfterDeleteEvent, setReloeadPageAfterDeleteEvent] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8080/allVoluntersInformations')
            .then(res => res.json())
            .then(res => setUserInformations(res));
    }, [reloeadPageAfterDeleteEvent])
    const deleteEvent = (id) => {
        fetch('http://localhost:8080/deleteEvent/'+id, {
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
    
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div>
                <Container className="pt-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Registating date</th>
                                <th>Volunteer list</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userInformations.length>0 && userInformations.map((user,index)=><TableRow deleteEvent={deleteEvent} user={user}></TableRow>)
                            }



                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    );
};

export default AdminVolunteerRegisterList;