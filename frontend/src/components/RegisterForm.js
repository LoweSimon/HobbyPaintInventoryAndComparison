import React, { useState } from "react";
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

export default function RegisterForm(){

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [register, setRegister] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "http://localhost:5000/register",
            data: {
                name,
                username,
                email,
                password,
            },
        };

        axios(configuration)
            .then((result) => {
                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            });
    }

    return (
        <>
        <h2 className="text-primary text-center">Register</h2>
        
            <Container fluid>                
                <Row className="d-flex justify-content-center">
                    <Card className="bg-secondary bg-gradient me-auto mx-auto text-center">
                        <Card.Body>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group as={Row} className="mb-4 text-center" controlId="formName">
                                    <Form.Label column sm={2}>Name: </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control 
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter your name"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-4" controlId="formUsername">
                                    <Form.Label column sm={2}>Username: </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control 
                                            type="text"
                                            name="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Enter a username"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-4" controlId="formEmail">
                                    <Form.Label column sm={2}>Email Address: </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control 
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-4" controlId="formPassword">
                                    <Form.Label column sm={2}>Enter a password: </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control 
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter a password"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-4" controlId="formConfirmPassword">
                                    <Form.Label column sm={2}>Confirm Password: </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control 
                                            type="password"
                                            name="confirmpassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm your password"
                                        />
                                    </Col>
                                </Form.Group>

                                <Button
                                    className="my-2" 
                                    variant="primary" 
                                    type="submit"
                                    onClick={(e) => handleSubmit(e)}>Register
                                </Button>

                                <Button  
                                    variant="primary" 
                                    onClick={event => window.location.href='/login'}>Existing Member?
                                </Button>

                                {register ? (
                                    <p className="text-success">You have successfully registered.</p>
                                ) : (
                                    <p className="text-danger">Registration not complete.</p>
                                )}    
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
