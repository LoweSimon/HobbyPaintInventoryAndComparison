import React from "react";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";

import citadelLogo from '../images/citadel-logo.jpg';
import akLogo from '../images/ak-interactive.png';
import armypainterLogo from '../images/armypainter-logo.jpg';
import vallejoLogo from '../images/vallejo-logo.png';


export default function HomePage()  {
    return (
        <>
        <div className="home text-center">
            <h1>Home Page</h1>
        </div>
        
        <div>
            <Container className="border border-primary rounded bg-secondary">

                <h2 className="intro text-center">Please select the paint you wish to view</h2>

            <Row>
                <CardGroup className="mb-4">
                    <Col>
                            <a href="./citadelpage.js">
                                <Card className="border rounded mx-2 h-100">
                                    <Card.Img src={citadelLogo} height="100%"></Card.Img>
                                </Card>
                            </a>
                    </Col>
                    <Col>        
                        <a href="./akinteractivepage.js">
                            <Card className="border rounded mx-2">
                                <Card.Img src={akLogo} height="100%"></Card.Img>
                            </Card>
                        </a>    
                    </Col>
                </CardGroup>
            </Row>   

            <Row>
                <CardGroup className="mb-2">
                    <Col>
                        <a href="./armypainterpage.js">
                            <Card className="border rounded mx-2">
                                <Card.Img src={armypainterLogo} height="100%"></Card.Img>
                            </Card>
                        </a>
                    </Col>

                    <Col>
                        <a href="./vallejopage.js">
                            <Card className="border rounded mx-2 h-100">
                                <Card.Img src={vallejoLogo} height="100%"></Card.Img>
                            </Card>
                        </a>
                    </Col>
                </CardGroup>
            </Row>    

            </Container>
            
        </div>
        </>
    )
}