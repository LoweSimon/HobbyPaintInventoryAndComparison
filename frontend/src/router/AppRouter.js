import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<RegisterForm />} exact={true} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter;