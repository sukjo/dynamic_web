// import React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom/client";

// grab our #root div and store it as a variable
// give React control of the #root
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// create an app component for loading our app
// the parent component of all components!
// components always capitalized
function App() {
  // return <h1>Hello React</h1>; // there can only be one tag per level!

  const name = "Jo";
  const age = 20002002220;
  // let isFem = false; // react won't render this bc it doesn't know how to render boolean
  let gender = "female";
  let randomize = Math.random();
  if (randomize > 0.5) {
    gender = "male";
  }
  const arr = [6, 4, 2];
  const myObj = { name: "suk" };

  return (
    <>
      <h2>Hello React</h2>
      <p>My name is {name}.</p>
      <p>I am {age}.</p>
      <p>Gender: {gender}.</p>
      <p>Gender: {Math.random() > 0.5 ? "male" : "female"}.</p>
      {/* <p>My last name is {myObj}</p> */}
      <button disabled={false} style={{ color: "red" }}>
        contact me
      </button>
      <input type="number" min={5}></input>
    </>
  );
}

// render it in our react root / root div element from index.html
// react components look like a closed HTML tag
root.render(<App />);

/* 

// TEMPLATE

// importing dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/
