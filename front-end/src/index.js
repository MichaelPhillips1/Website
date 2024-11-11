import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import BackgroundDots from "./js/BackgroundDots";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BackgroundDots />
  </React.StrictMode>,
  document.getElementById('root')
);
