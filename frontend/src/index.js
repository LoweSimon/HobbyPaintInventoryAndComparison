import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./app";
import { Provider } from "react-redux";
import store from "./redux/Store";
import 'bootstrap/dist/css/bootstrap.min.css';


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <Provider store={store}>
            <App />
    </Provider>
);