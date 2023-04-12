import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import App from "./App.js";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
