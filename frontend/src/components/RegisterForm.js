import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
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
        <h2 className="text-primary">Register</h2>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formName">
                <Form.Label>Name: </Form.Label>
                <Form.Control 
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
            </Form.Group>

            <Form.Group controlId="formUsername">
                <Form.Label>Username: </Form.Label>
                <Form.Control 
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter a username"
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email Address: </Form.Label>
                <Form.Control 
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Enter a password: </Form.Label>
                <Form.Control 
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a password"
                />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password: </Form.Label>
                <Form.Control 
                    type="password"
                    name="confirmpassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                />
            </Form.Group>

            <Button 
                variant="primary" 
                type="submit"
                onClick={(e) => handleSubmit(e)}>Register</Button>

            {register ? (
                <p className="text-success">You have successfully registered.</p>
            ) : (
                <p className="text-danger">Registration not complete.</p>
            )}    
        </Form>
        </>
    )
}
