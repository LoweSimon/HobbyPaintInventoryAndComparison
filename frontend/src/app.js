import React from "react";
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dbConnect from './backend/db/dbconnect';
import RegisterForm from "./components/RegisterForm";

dbConnect();

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