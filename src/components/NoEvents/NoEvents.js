import React from 'react';
import { Link } from 'react-router-dom';
import './NoEvents.css'
const NoEvents = () => {
    return (
        <div>
            <div class="d-flex flex-row align-items-center">
               
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <span class="display-1 d-block">No Previous Events</span>
                            <div class="mb-4 lead">Go To Home Page To Add Events</div>
                            <Link to={`/`}>  <a className="btn px-4 text-primary link" >Back to Home</a>
                            </Link>
                           
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NoEvents;