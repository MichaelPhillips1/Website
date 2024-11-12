import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import BackgroundDots from "./js/BackgroundDots";
import BarDashMenu from "./js/BarDashMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BackgroundDots />
    <BarDashMenu />
  </React.StrictMode>,
  document.getElementById('root')
);
