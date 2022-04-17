import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";


// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <App />
    </Router>

);
