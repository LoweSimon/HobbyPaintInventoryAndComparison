import React from "react";
import { Nav } from "react-bootstrap";

export default function NavMenu() {
    return (
        <>
            <NavMenu>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#register">Register</Nav.Link>
            </NavMenu>
        </>
    )
}