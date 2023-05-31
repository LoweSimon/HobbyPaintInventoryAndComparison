import React from "react";
import NavMenu from './components/NavMenu';
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/LoginForm";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext";




export default function App() {

    const { user } = useAuthContext()

    return (
        <>
        <NavMenu />
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/register" element={ !user ? <RegisterForm /> : <Navigate to="/" /> } />
                <Route exact path="/login" element={ !user ? <Login /> : <Navigate to="/" /> } />
                <Route path="/profile" element={ user ? <ProfilePage /> : <Navigate to="/login" /> }/>
            </Routes>
        </BrowserRouter>
        </>
    )
}