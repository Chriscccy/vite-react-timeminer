import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/index.tsx";
import "./index.scss";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
