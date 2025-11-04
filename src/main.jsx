import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import WhatsappChat from "./components/whatsapp.jsx";
import CursorEffect from "./components/CursorEffect.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CursorEffect />
      <App />
      <WhatsappChat />
    </StrictMode>
  </BrowserRouter>
);
