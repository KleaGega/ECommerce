import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { CartContextProvider } from "./context/providers/CartContextProvider.tsx";
import ThemeProvider from "./context/providers/ThemeProvider.tsx";
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
