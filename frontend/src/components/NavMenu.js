import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from '../images/logo.png';
import { useLogout } from './../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavMenu() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-info">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Company Logo" width={60} height={60} className="d-inline-block" />
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <NavbarCollapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                            </Nav>
                                
                            
                            <Nav>
                                {user && (
                                    <div>
                                        <span>{user.email}</span>
                                        <Button onClick={handleClick}>Logout</Button>
                                    </div>    
                                )}
                                {!user && (
                                    <div>
                                        <Nav.Link href="/login">Login</Nav.Link>
                                        <Nav.Link href="/register">Register</Nav.Link>
                                    </div>
                                )}
                            </Nav>
                            
                        </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    )
}