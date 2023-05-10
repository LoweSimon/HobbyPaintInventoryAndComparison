import React from "react";
import { Button, Form } from 'react-bootstrap';

export default function LoginForm(){
    return (
        <>
        <h2>Log In</h2>
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username: </Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter a username"
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email Address: </Form.Label>
                <Form.Control 
                    type="email"
                    placeholder="Enter your email"
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Enter a password: </Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Enter a password"
                />
            </Form.Group>

            <Button variant="primary" type="submit">Register</Button>
        </Form>
        </>
    )
}
