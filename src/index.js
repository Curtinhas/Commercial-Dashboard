import "./index.css";

import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import React from "react";
import ReactDOM from "react-dom/";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
