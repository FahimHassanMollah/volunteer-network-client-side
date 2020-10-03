import React, { useEffect, useState } from 'react';
import { Button, CardColumns, CardDeck, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import volunteerInformations from '../../../fakeData/fakeData';
import VolunterCategoryCard from '../VolunterCategoryCard/VolunterCategoryCard';

const VolunterCategoryAll = () => {
    const [volunteerInformation, setVolunteerInformation] = useState([]);
    useEffect(() => {
       fetch('http://localhost:8080/getVolunteerCategories')
       .then(res=>res.json())
       .then(data=>setVolunteerInformation(data))
    }, [])

    return (
        <div>
            <Container>
                <h2 className="text-center text-uppercase" style={{ fontWeight: "bold" }}>I grow by helping people in need.</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                    <div className="p-3">
                    <InputGroup size="lg">
                        <FormControl
                            placeholder="Search...."
                           
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                    </Col>
                </Row>
               
               
            </Container>
            <Container>
            <Row className="">
                   <Col md={8} lg={12} className="mx-auto">
                  
                    
                    <CardColumns className=""  >
                            {
                               volunteerInformation.length>0 && volunteerInformation.map((item,index)=><VolunterCategoryCard item={item} key={index}></VolunterCategoryCard>)
                            }
                        </CardColumns>
                   
                   
                   </Col>
                </Row>
            </Container>
        </div>
    );
};

export default VolunterCategoryAll;