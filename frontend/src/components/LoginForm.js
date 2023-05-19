import React from "react";
import { useState } from "react";
import { Button, Container, Form, Row, Card } from 'react-bootstrap';
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function LoginForm(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "http://localhost:5000/login",
            data: {
                username,
                email,
                password,
            },
        };

        axios (configuration)
            .then((result) => {
                setLogin(true);
                cookies.set("TOKEN", result.data.token, {
                    path:"/",
                });
                window.location.href = "/profile";
            })
            .catch((error) => {
                error = new Error();
            })
    }

    return (
        <>
        <h2 className="text-primary text-center">Log In</h2>
        <Container fluid>
            <Row className="d-flex px-4" >
                <Card className="bg-secondary bg-gradient me-auto mx-auto p-2 shadow-lg">
                    <Card.Body>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group className="mb-4 mt-2" controlId="formUsername">
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
                            <div className="text-center">
                                <Button size="lg" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>Log in</Button>

                                <Button size="lg" variant="primary" type="submit" onClick={(e) => window.location.href="/register"}>Need to register?</Button>

                                {login ? (
                                    <p className="text-success">You are now logged in</p>
                                ) : (
                                    <p className="text-danger">You are not logged in</p>
                                )}
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        </>
    )
}
