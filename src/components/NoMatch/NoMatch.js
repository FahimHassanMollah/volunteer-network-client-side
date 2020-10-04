import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css'
const NoMatch = () => {
    return (
        <div>
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <span class="display-1 d-block">404</span>
                            <div class="mb-4 lead">The page you are looking for was not found.</div>
                            <Link to={`/`}>  <a className="btn px-4 text-primary link" >Back to Home</a>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;