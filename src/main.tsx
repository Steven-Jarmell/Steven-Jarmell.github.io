import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VersionProvider } from "./VersionContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <VersionProvider>
      <App />
    </VersionProvider>
  </React.StrictMode>
);
