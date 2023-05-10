import React from "react";
import NavMenu from './components/NavMenu';
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {
    return (
        <Router>
            <NavMenu />
            <Routes>
                <Route exact path="/register" element={ <RegisterForm /> } />
                <Route exact path="/login" element={ <LoginForm /> } />
            </Routes>
        </Router>
    )
}