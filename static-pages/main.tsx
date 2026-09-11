import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GodArchive from "../app/page";
import "../app/globals.css";

document.documentElement.style.setProperty("--font-geist-sans", 'Arial, "Microsoft YaHei", sans-serif');
document.documentElement.style.setProperty("--font-geist-mono", 'Consolas, "Microsoft YaHei", monospace');

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GodArchive />
  </StrictMode>,
);
