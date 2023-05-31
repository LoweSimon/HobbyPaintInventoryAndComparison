import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./app";
import { PaintContextProvider } from "./context/PaintContext";
import { AuthContextProvider } from "./context/AuthContext";


import "./styles/style.scss"


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <PaintContextProvider>
                <App />
            </PaintContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
    
);