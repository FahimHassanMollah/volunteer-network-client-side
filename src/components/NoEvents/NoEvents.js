import React from 'react';
import { Link } from 'react-router-dom';
import './NoEvents.css'
const NoEvents = () => {
    return (
        <div>
            <div className="d-flex flex-row align-items-center">
               
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">No Previous Events</span>
                            <div className="mb-4 lead">Go To Home Page To Add Events</div>
                            <Link to={`/`}>  <a className="btn px-4 text-primary link" >Back to Home</a>
                            </Link>
                           
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NoEvents;