import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux";
import store from "./store/store.js";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>

);
