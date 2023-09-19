// THIS IS THE PARENT INDEX.JS
// THIS IS ALL THIS FILE WILL EVER DO

/* 
parent index.js instantiates React,
takes control of div in html page,
and insert our app

keep this clean!

*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
