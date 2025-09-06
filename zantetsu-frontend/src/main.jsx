import "./styles/index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GeneralProvider } from "./context/GeneralContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GeneralProvider>
          <App />
        </GeneralProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
