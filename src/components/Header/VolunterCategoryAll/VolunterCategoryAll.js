import React, { useEffect, useState } from 'react';
import { Button, CardColumns, CardDeck, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import volunteerInformations from '../../../fakeData/fakeData';
import VolunterCategoryCard from '../VolunterCategoryCard/VolunterCategoryCard';
import {ClipLoader,BeatLoader,PuffLoader,BounceLoader} from "react-spinners";
const VolunterCategoryAll = () => {
    const [volunteerInformation, setVolunteerInformation] = useState([]);
    useEffect(() => {
        fetch('https://ancient-sierra-22860.herokuapp.com/getVolunteerCategories')
            .then(res => res.json())
            .then(data => setVolunteerInformation(data))
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
                <Row className="justify-content-md-center">
                    <CardColumns>
                        {
                            volunteerInformation.length > 0 ? volunteerInformation.map((item, index) => <VolunterCategoryCard item={item} key={index}></VolunterCategoryCard>)
                            :
                            <BeatLoader margin={2} ></BeatLoader>
                        }
                    </CardColumns>
                </Row>
            </Container>
        </div>
    );
};
export default VolunterCategoryAll;