import React from 'react';
import { Col } from 'react-bootstrap';

const UserEventsDetails = () => {
    return (
        <div>
            <Col md={12}>
            <div className="card mb-3 " style={{maxWidth:"400px"}}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>

                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>                
            </Col>
        </div>
    );
};

export default UserEventsDetails;