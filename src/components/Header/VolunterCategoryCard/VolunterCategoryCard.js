import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './card.css'
const VolunterCategoryCard = (props) => {

    return (
        <div>

            <Col md={4}>
                <Link to={`/volunterRegister/${props.item.categoryName}`}>
                    <Card className="text-center text-white" style={{ width: '18rem' }}>
                        <div className="rounded border">
                            <Card.Img className="img-thumbnail" style={{ width: "300px" }} variant="top" src={props.item.image||'https://i.imgur.com/UVbvexUm.jpg'} />
                            <Card.Body className="p-2 m-0 bg-danger" >
                                <Card.Title className="p-0 m-0"> {props.item.categoryName}</Card.Title>
                            </Card.Body>
                        </div>
                    </Card>
                </Link>
            </Col>

        </div>

    );
};

export default VolunterCategoryCard;