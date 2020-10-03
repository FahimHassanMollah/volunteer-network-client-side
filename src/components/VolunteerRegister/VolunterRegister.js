import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LogoHeader from '../logoHeader/LogoHeader';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import { LoggedInUserContext } from '../../App';
const VolunterRegister = () => {
   const{name}= useParams();
   const [user, setUser] = useContext(LoggedInUserContext);
   const { register, handleSubmit, watch, errors,setValue} = useForm();
   useEffect(() => {
    setValue('names',user.name)
    
   }, [user])
   useEffect(() => {
    setValue('email',user.email)

   }, [user])
   const onSubmit = (data) => {
       
   }
    return (
        <div>
            <LogoHeader></LogoHeader>
            <h2>volunter register for {name}</h2>
            <div>
            <Container>
                        <Row>
                            <Col className="mx-auto pt-2 " sm={6} >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    

                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input  name="names" className="form-control" placeholder="First name"
                                            ref={register} />
                                       
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input name="email" className="form-control" placeholder="Enter email"
                                            ref={register}
                                        />
                                       
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input name="password" type="password" className="form-control"
                                            ref={register({ required: "password is required", minLength: { value: 6, message: "Password must be at least 6 characeters" } })}
                                            placeholder="Enter password" />

                                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Registration</button>
                                    
                                </form>
                                {/* {
                                    error &&
                                    <div class="alert alert-warning" role="alert">
                                        {error}
                                    </div>
                                } */}
                               
                            </Col>

                        </Row>
                    </Container>
            </div>
        </div>
    );
};

export default VolunterRegister;