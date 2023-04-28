import React from "react";
import { Button, Form } from 'react-bootstrap';

export default function RegisterForm(){
    return (
        <>
        <h2>Register</h2>
        <Form>
            <Form.Group controlId="formName">
                <Form.Label>Name: </Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter your name"
                />
            </Form.Group>

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

            <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password: </Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Confirm your password"
                />
            </Form.Group>

            <Button variant="primary" type="submit">Reigster</Button>
        </Form>
        </>
    )
}
