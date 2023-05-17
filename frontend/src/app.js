import React from "react";
import NavMenu from './components/NavMenu';
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./components/ProfilePage";
import FreeComponent from "./components/FreeComponent";
import ProtectedRoute from "./utils/ProtectedRoute";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




export default function App() {
    return (
        <>
        <NavMenu />
        <Router>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/register" element={ <RegisterForm /> } />
                <Route exact path="/login" element={ <LoginForm /> } />
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                }/>
                <Route exact path="/free" element={ <FreeComponent /> } />
            </Routes>
        </Router>
        </>
    )
}