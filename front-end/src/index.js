import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import HeaderNavBar from "./js/HeaderNavBar.js";
import HeaderBanner from "./js/HeaderBanner.js";
import Education from "./js/Education.js";
import Experience from "./js/Experience.js";
import Contact from "./js/Contact.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HeaderNavBar />
    <HeaderBanner />
    <Education />
    <Experience />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
