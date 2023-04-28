import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Col, Row } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";
import NavMenu from './../components/NavMenu';

const AppRouter = () => (
    <BrowserRouter>
        <Container>
            <Row>
                <NavMenu />
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Routes>
                        <Route path="/" element={<RegisterForm />} exact={true} />
                    </Routes>
                </Col>
            </Row>
        </Container>
    </BrowserRouter>
);

export default AppRouter;