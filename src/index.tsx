import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import NavBar from "components/NavBar";
import Footer from "components/Footer";

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>,
);
