import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
const AdminAddEvent = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://ancient-sierra-22860.herokuapp.com/singleAddVolunteerCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                history.replace(from);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <AdminHeader></AdminHeader>
            <Container>
                <div className="">
                    <Row>
                        <Col md={9} className="mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Event Title</label>
                                        <input name="categoryName" className="form-control" placeholder="Enter ttile"
                                            ref={register} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="date">Event Date</label>
                                        <input name="date" type="date" className="form-control"
                                            ref={register} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Event Description</label>
                                        <textarea name="description" ref={register} className="form-control" placeholder="Description" rows="4"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};
export default AdminAddEvent;