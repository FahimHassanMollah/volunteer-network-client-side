import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './card.css'
const VolunterCategoryCard = (props) => {
   
    return (
        <div>
           <Link>
           <Card className="text-center text-white" style={{ width: '18rem' }}>
               <div className="rounded border">
               <Card.Img className="img-thumbnail" style={{width:"300px"}} variant="top" src={props.item.image} />
                <Card.Body className="p-2 m-0 bg-danger" >
                    <Card.Title className="p-0 m-0"> {props.item.categoryName}</Card.Title>
                </Card.Body>
               </div>
            </Card>
           </Link>
           
        </div>
    );
};

export default VolunterCategoryCard;