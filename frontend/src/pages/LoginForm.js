import React, { useState } from "react";
import { Button, Card, Form, Container, Row } from 'react-bootstrap';
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password)
    }


    return (
        <>
        <h2 className="text-primary text-center">Login</h2>
        
            <Container fluid>                
                <Row className="d-flex px-4" >
                    <Card className="bg-secondary bg-gradient me-auto mx-auto p-2 shadow-lg">
                        <Card.Body>
                            <Form className="login" onSubmit={handleSubmit}>
                                
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

                                <div className="text-center">
                                    <Button
                                        disabled={isLoading}
                                        size="lg" 
                                        variant="primary" 
                                        type="submit"
                                        onClick={(e) => handleSubmit(e)}>Login
                                    </Button>
                            
                                    <Button
                                        size="lg" 
                                        variant="primary" 
                                        onClick={event => window.location.href='/register'}>Need to register?
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


export default Login;