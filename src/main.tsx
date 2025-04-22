import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { GlobalProviders } from "./context/GlobalProviders";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProviders>
      <BrowserRouter basename="/github-api">
        <App />
      </BrowserRouter>
    </GlobalProviders>
  </StrictMode>
);
