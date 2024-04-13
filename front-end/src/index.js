import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import HeaderNavBar from "./js/HeaderNavBar.js";
import HeaderBanner from "./js/HeaderBanner.js";
import Education from "./js/Education.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HeaderNavBar />
    <HeaderBanner />
    <Education />
  </React.StrictMode>,
  document.getElementById('root')
);
