import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SearchQueryProvider } from "./contexts/SearchContext/index.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchQueryProvider>
        <App />
      </SearchQueryProvider>
    </BrowserRouter>
  </StrictMode>
);
