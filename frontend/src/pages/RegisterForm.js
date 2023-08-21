import React, { useState } from "react";
import { Button, Card, Form, Container, Row, Alert } from 'react-bootstrap';

import { useSignUp } from "../hooks/useSignUp";

const RegisterForm = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {signup, error, isLoading} = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await signup(name, username, email, password, confirmPassword)
        if (password !== confirmPassword) {
            <Alert variant="danger">
                Passwords do not match!
            </Alert>
        }
    }


    return (
        <>
        <h2 className="text-primary text-center">Register</h2>
        
            <Container fluid>                
                <Row className="d-flex px-4" >
                    <Card className="bg-secondary bg-gradient me-auto mx-auto p-2 shadow-lg">
                        <Card.Body>
                            <Form className="signup" onSubmit={handleSubmit}>
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
                                        disabled={isLoading}
                                        size="lg" 
                                        variant="primary" 
                                        type="submit">Register
                                    </Button>
                            
                                    <Button
                                        size="lg" 
                                        variant="primary" 
                                        onClick={event => window.location.href='/login'}>Existing Member?
                                    </Button>
                                </div>

                                {error && <div className="error">{error}</div>}
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default RegisterForm;
