import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Logger } from "./logging/Logger";
import "./styles/global.css";

Logger.info("main", "Bootstrapping Specitas Group React application");

const rootElement = document.getElementById("root");

if (!rootElement) {
  Logger.error("main", "Root element #root was not found in the document");
  throw new Error("Root element #root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

Logger.info("main", "React root render invoked");
