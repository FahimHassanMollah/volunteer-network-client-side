import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import LogoHeader from '../logoHeader/LogoHeader';
import { Controller, useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import { LoggedInUserContext } from '../../App';


const VolunterRegister = () => {
    const { name } = useParams();
    const [user, setUser] = useContext(LoggedInUserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = { from: { pathname: "/addEvent" } };
    const { register, handleSubmit, watch, errors, setValue } = useForm();

    useEffect(() => {
        setValue('names', user.name)

    }, [user])
    useEffect(() => {
        setValue('email', user.email)

    }, [user])
    useEffect(() => {
        setValue('category', name)

    }, [name])


    const onSubmit = (data) => {
        fetch(' http://localhost:8080/volunteerEventsInformation', {
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
            <LogoHeader></LogoHeader>
           
            <div>
                <Container>
                    <Row>
                        <Col className="mx-auto pt-2 " sm={6} >
                            <form onSubmit={handleSubmit(onSubmit)}>


                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input name="names" className="form-control" placeholder="First name"
                                        ref={register} />

                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" className="form-control" placeholder="Enter email"
                                        ref={register}
                                    />

                                </div>


                                <div className="form-group">

                                    <textarea name="description" ref={register} className="form-control" placeholder="Description" rows="3"></textarea>

                                </div>
                                <div>
                                    <label htmlFor="date">Date</label>
                                    <input name="date" type="date" className="form-control"
                                        ref={register} />

                                </div>

                                <div className="form-group">
                                    <label>Category</label>
                                    <input name="category" className="form-control" placeholder="Category"
                                        ref={register} />

                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Registration</button>

                            </form>


                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default VolunterRegister;