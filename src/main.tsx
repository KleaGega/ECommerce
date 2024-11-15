import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { CartContextProvider } from "./context/store/providers/CartContextProvider.tsx";
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
