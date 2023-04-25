import React from "react";
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>

        </Form>
    )

}

export default {RegisterForm};