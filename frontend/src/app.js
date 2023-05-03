import React from "react";
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from "./components/RegisterForm";

export default function App() {
    return (
        <Router>
            <NavMenu />
            <Routes>
                <Route exact path="/register" element={<RegisterForm />} />
            </Routes>
        </Router>
    )
}