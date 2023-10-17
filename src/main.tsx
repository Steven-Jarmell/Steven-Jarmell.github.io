import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParticlesComponent from "./Components/ParticlesComponent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </BrowserRouter>
        <ParticlesComponent />
    </React.StrictMode>
);