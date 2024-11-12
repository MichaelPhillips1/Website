import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import BackgroundDots from "./js/BackgroundDots";
import BarDashMenu from "./js/BarDashMenu";
import InfoCard from "./js/InfoCard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BarDashMenu />
    <BackgroundDots />
    <InfoCard />
  </React.StrictMode>,
  document.getElementById('root')
);
