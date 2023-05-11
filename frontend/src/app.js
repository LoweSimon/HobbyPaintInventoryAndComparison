import React from "react";
import NavMenu from './components/NavMenu';
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import AuthComponent from "./components/AuthComponent";
import FreeComponent from "./components/FreeComponent";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




export default function App() {
    return (
        <Router>
            <NavMenu />
            <Routes>
                <Route exact path="/register" element={ <RegisterForm /> } />
                <Route exact path="/login" element={ <LoginForm /> } />
                <Route exact path="/auth" element={ <AuthComponent /> } />
                <Route exact path="/free" element={ <FreeComponent /> } />
            </Routes>
        </Router>
    )
}