import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Logger } from "./logging/Logger";
import "./styles/global.css";

Logger.info("main", "Bootstrapping Specitas Group React application");

// #region agent log
fetch("http://127.0.0.1:7530/ingest/901f36b6-840a-4ea6-8756-170f80e9ee9c", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Debug-Session-Id": "27faa4",
  },
  body: JSON.stringify({
    sessionId: "27faa4",
    runId: "pre-fix",
    hypothesisId: "E",
    location: "main.tsx:boot",
    message: "App boot - which JS bundle is running",
    data: {
      href: window.location.href,
      scripts: Array.from(
        document.querySelectorAll('script[src*="/assets/"]'),
      ).map((el) => (el as HTMLScriptElement).src),
      navAboutLabel: "will-resolve-from-content",
      buildMarker: "debug-27faa4-boot-v2",
    },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

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
