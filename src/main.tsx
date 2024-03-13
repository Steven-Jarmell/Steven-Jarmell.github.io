import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.css";
import ParticlesComponent from "./Components/ParticlesComponent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
        <ParticlesComponent />
    </React.StrictMode>
);
