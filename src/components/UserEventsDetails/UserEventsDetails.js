import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';

const UserEventsDetails = (props) => {
    const {_id,names,description,category,date}=props.userEvents;
    let allCategoriesInformations=props.allCategories;
   let checker= allCategoriesInformations.find((singleCategory)=>singleCategory.categoryName===category);
   
    return (
        <div>
            <Col md={12}>
            <div className="card pb-3 border-0 " style={{maxWidth:"400px"}}>
                <div className="row no-gutters" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <div className="col-md-5 p-2" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                      <img style={{width:'100%'}} src={checker.image} alt=""/>

                    </div>
                    <div className="col-md-7">
                        <div className="card-body p-2">
                            <h5 className="card-title">{category}</h5>
                            <p className="card-text"><small className="text-muted">date:{date}</small></p>
                            <Button onClick={()=>props.deleteEvent(_id)} className="btn-danger">delete</Button>
                           
                        </div>
                    </div>
                </div>
            </div>                
            </Col>
        </div>
    );
};

export default UserEventsDetails;