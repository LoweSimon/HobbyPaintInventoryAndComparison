import React, { useState } from "react";
import { Button, Card, Form, Container, Row } from 'react-bootstrap';
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
                <Row className="d-flex px-4" >
                    <Card className="bg-secondary bg-gradient me-auto mx-auto p-2 shadow-lg">
                        <Card.Body>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group className="mb-4 mt-2" controlId="formName">
                                    <Form.Label>Name: </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter your name"
                                        />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formUsername">
                                    <Form.Label>Username: </Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Enter a username"
                                        />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formEmail">
                                    <Form.Label>Email Address: </Form.Label>
                                        <Form.Control 
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                        />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formPassword">
                                    <Form.Label>Enter a password: </Form.Label>
                                        <Form.Control 
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter a password"
                                        />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formConfirmPassword">
                                    <Form.Label>Confirm Password: </Form.Label>
                                        <Form.Control 
                                            type="password"
                                            name="confirmpassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm your password"
                                        />
                                </Form.Group>

                                <div className="text-center">
                                    <Button
                                        size="lg" 
                                        variant="primary" 
                                        type="submit"
                                        onClick={(e) => handleSubmit(e)}>Register
                                    </Button>
                            
                                    <Button
                                        size="lg" 
                                        variant="primary" 
                                        onClick={event => window.location.href='/login'}>Existing Member?
                                    </Button>
                                </div>

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
