import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavMenu() {
    return (
        <>
            <Navbar className="bg-info bg-gradient">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}